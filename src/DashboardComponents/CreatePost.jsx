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
    media: [],
  });

  const [mediaFiles, setMediaFiles] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  // Get user data with safety checks
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const token = userData?.token || "";
  const sellerId = userData?._id || userData?.sellerId || "";

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const totalMedia = formData.media.length + files.length;

    if (totalMedia > 3) {
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
        media: [...prev.media, ...previews],
      }));
      setMediaFiles((prev) => [...prev, ...files]);
    });
  };

  const handleRemoveImage = (index) => {
    const updatedPreviews = [...formData.media];
    const updatedFiles = [...mediaFiles];
    updatedPreviews.splice(index, 1);
    updatedFiles.splice(index, 1);

    setFormData((prev) => ({ ...prev, media: updatedPreviews }));
    setMediaFiles(updatedFiles);
  };

  useEffect(() => {
    const isValid = Object.values(formData).every((value) =>
      typeof value === "string" ? value.trim() : value.length > 0
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = async () => {
    if (!isFormValid) {
      message.warning("Please fill out all fields before submitting.");
      return;
    }

    if (!sellerId || !token) {
      message.error("Authentication error. Please log in again.");
      return;
    }

    const categoryId = formData.category;
    if (!categoryId) {
      message.error("Please select a valid category");
      return;
    }

    try {
      const form = new FormData();
      form.append("productName", formData.productName);
      form.append("school", formData.school);
      form.append("price", formData.price);
      form.append("condition", formData.condition);
      form.append("description", formData.description);
      form.append("subcategory", formData.subcategory);

      mediaFiles.forEach((file) => {
        form.append("media", file);
      });

      await axios.post(
        `https://campustrade-kku1.onrender.com/api/v1/products/${categoryId}/${sellerId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.success("Post created successfully!");
      setModalVisible(true);

      // Reset form
      setFormData({
        productName: "",
        school: "",
        category: "",
        subcategory: "",
        price: "",
        condition: "",
        description: "",
        media: [],
      });
      setMediaFiles([]);
    } catch (error) {
      console.error("Error creating post:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create post. Please try again.";
      message.error(errorMessage);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://campustrade-kku1.onrender.com/api/v1/all-categories"
      );
      setAllCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  console.log(allCategories);
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
              onChange={(e) => handleInputChange("productName", e.target.value)}
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
              <option>Select category</option>
              {allCategories?.map((cat) => (
                <option key={cat.id}>{cat.name}</option>
              ))}
            </select>

            <p className="create-post-p-tag">Subcategory</p>
            <select
              className="input-text-create22"
              value={formData.subcategory}
              onChange={(e) => handleInputChange("subcategory", e.target.value)}
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
              type="number"
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
                onChange={(e) => handleInputChange("condition", e.target.value)}
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
                onChange={(e) => handleInputChange("condition", e.target.value)}
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
            {formData.media.map((img, index) => (
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
            }}
          >
            Post
          </button>
        </div>

        <Modal
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          centered
        >
          <h2 style={{ textAlign: "center" }}>✅ Post Created!</h2>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Your item has been posted successfully.
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default CreatePost;
