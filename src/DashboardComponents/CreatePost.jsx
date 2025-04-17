import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import axios from "axios";
import "./createpost.css";

const categories = {
  gadget: ["mobile phone", "tablets", "laptops"],
  books: ["fictional", "non-fiction", "educational books"],
  cloths: ["jeans", "shirt", "blouse"],
  shoe: ["casual", "heels", "sneakers"],
  homeappliances: ["beds", "kitchen utensil"],
};

const CreatePost = () => {
  const [formData, setFormData] = useState({
    productName: "",
    school: "",
    category: "",
    subcategory: "",
    price: "",
    condition: "",
    description: "",
    images: [],
  });

  const [imageFiles, setImageFiles] = useState([]); // Store original files
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");
  const [platformFee, setPlatformFee] = useState(0);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.length + files.length;

    if (totalImages > 3) {
      message.warning("You can only upload up to 3 images.");
      return;
    }

    const readers = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ preview: reader.result, file });
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((newData) => {
      const previews = newData.map((item) => item.preview);
      const files = newData.map((item) => item.file);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...previews],
      }));
      setImageFiles((prev) => [...prev, ...files]);
    });
  };

  const handleRemoveImage = (index) => {
    const updatedPreviews = [...formData.images];
    const updatedFiles = [...imageFiles];
    updatedPreviews.splice(index, 1);
    updatedFiles.splice(index, 1);

    setFormData((prev) => ({ ...prev, images: updatedPreviews }));
    setImageFiles(updatedFiles);
  };

  useEffect(() => {
    const {
      productName,
      school,
      category,
      subcategory,
      price,
      condition,
      description,
      images,
    } = formData;

    const allFieldsFilled =
      productName &&
      school &&
      category &&
      subcategory &&
      price &&
      condition &&
      description &&
      images.length > 0;

    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWxsZXJJZCI6IjZkNTM0MzYyLTRhNDAtNDI3Mi1hYWFiLTMzOTM4MTkwNGExMyIsImlhdCI6MTc0NDg5NzkyNiwiZXhwIjoxNzQ0ODk4MjI2fQ.alh5mzzf_l4B2G__NICPB-jo0EwLcPbffII3bnKILfw";

  const handleSubmit = async () => {
    if (!isFormValid) {
      message.warning("Please fill out all fields before submitting.");
      return;
    }

    try {
      const form = new FormData();
      form.append("productName", formData.productName);
      form.append("school", formData.school);
      form.append("categoryId", "794d58bb-f904-4618-8aa1-e01f9440c80b");
      form.append("sellerId", "6d534362-4a40-4272-aaab-339381904a13");
      form.append("subCategory", formData.subcategory);
      form.append("price", formData.price);
      form.append("condition", formData.condition);
      form.append("description", formData.description);

      imageFiles.forEach((file, index) => {
        form.append("images", file);
      });

      const response = await axios.post(
        "https://campustrade-kku1.onrender.com/api/v1/post",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.success("Post created successfully!");

      const price = parseFloat(formData.price);
      const fee = Number((price * 0.05).toFixed(2));
      setPlatformFee(fee);
      setPaymentLink(
        `https://pay.korapay.com?amount=${fee}&item=${formData.productName}`
      );
      setModalVisible(true);

      setFormData({
        productName: "",
        school: "",
        category: "",
        subcategory: "",
        price: "",
        condition: "",
        description: "",
        images: [],
      });
      setImageFiles([]);
    } catch (error) {
      console.error("Error creating post:", error);
      const msg =
        error.response?.data?.message || "Something went wrong. Try again.";
      message.error(msg);
    }
  };

  const handlePayment = () => {
    window.open(paymentLink, "_blank");
  };

  return (
    <div className="createpost-wrapper">
      <div className="createpost">
        <div className="createpost-input-wrapper">
          <div className="create-post-inputs-left">
            <p className="create-post-p-tag">Name of product</p>
            <input
              type="text"
              className="input-text-create"
              value={formData.productName}
              onChange={(e) =>
                handleInputChange("productName", e.target.value)
              }
            />

            <p className="create-post-p-tag">School</p>
            <input
              type="text"
              className="input-text-create"
              value={formData.school}
              onChange={(e) => handleInputChange("school", e.target.value)}
            />
          </div>

          <div className="create-post-inputs-right">
            <p className="create-post-p-tag">Category</p>
            <select
              className="input-text-create22"
              value={formData.category}
              onChange={(e) => {
                handleInputChange("category", e.target.value);
                handleInputChange("subcategory", "");
              }}
            >
              <option value="">Select category</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <p className="create-post-p-tag">Subcategory</p>
            <select
              className="input-text-create22"
              value={formData.subcategory}
              onChange={(e) =>
                handleInputChange("subcategory", e.target.value)
              }
              disabled={!formData.category}
            >
              <option value="">Select subcategory</option>
              {formData.category &&
                categories[formData.category].map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>

            <p className="create-post-p-tag">Price</p>
            <input
              type="text"
              className="input-text-create22"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </div>
        </div>

        <div className="createpost-checkbox-wrapper">
          <div className="condition-post">Condition</div>
          <div className="checkbox-radio">
            <label>
              <input
                type="radio"
                name="condition"
                className="radio"
                value="new"
                checked={formData.condition === "new"}
                onChange={(e) =>
                  handleInputChange("condition", e.target.value)
                }
              />
              <span className="create-post-p-tag">New</span>
            </label>
            <label>
              <input
                type="radio"
                name="condition"
                className="radio"
                value="used"
                checked={formData.condition === "used"}
                onChange={(e) =>
                  handleInputChange("condition", e.target.value)
                }
              />
              <span className="create-post-p-tag">Used</span>
            </label>
          </div>
        </div>

        <div className="createpost-description">
          <input
            type="text"
            placeholder="Eg iPhone XR for sale..."
            className="describtion"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>

        <div className="createpost-dragdrop">
          <p className="create-post-p-tag">Upload your Image (Max 3)</p>
          <label htmlFor="file-upload" className="draganddrop">
            Click to Upload / Take Photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            capture="environment"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          <div className="image-preview">
            {formData.images.map((img, index) => (
              <div key={index} className="image-preview-item">
                <img src={img} alt={`upload-${index}`} />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="remove-image-btn"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="createpost-button">
          <button
            className="PostBtn"
            disabled={!isFormValid}
            onClick={handleSubmit}
            style={{
              backgroundColor: isFormValid ? "#0f0c29" : "#ccc",
              color: isFormValid ? "white" : "#666",
              cursor: isFormValid ? "pointer" : "not-allowed",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
          >
            Post
          </button>
        </div>

        <Modal
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            ✅ Post Created!
          </h2>
          <p style={{ textAlign: "center" }}>Thanks for posting your item.</p>
          <p style={{ textAlign: "center", fontWeight: "bold", marginTop: 10 }}>
            Platform Fee: ₦{platformFee}
          </p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handlePayment}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Proceed to Payment
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CreatePost;
