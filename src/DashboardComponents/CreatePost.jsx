import React, { useState, useEffect } from "react";
import { Modal, message } from "antd";
import axios from "axios";
import "./createpost.css";
import { toast } from "react-toastify";

const CreatePost = () => {

  const schoolOptions = [
    { name: "Lagos State University" },

    {
      name: "University of Lagos",
    },
    { name: "Yaba College of Technology" },
  ];

  const [mediaFiles, setMediaFiles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const token = JSON.parse(localStorage.getItem("userData"))?.token;
  const school = JSON.parse(localStorage.getItem("user"))?.school;
  const [formData, setFormData] = useState({
    productName: "",
    school: school,
    price: "",
    condition: "",
    description: "",
    media: [],
  });

  console.log(school);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  console.log(formData)

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

  const isFormValid = Boolean(
    formData.productName &&
      formData.condition &&
      formData.description &&
      formData.price &&
      formData.media
  );

  console.log(isFormValid);

  console.log(token)

  const handleSubmit = async () => {
    try {
      if (!isFormValid) {
        toast.error("Please fill in all fields and upload images.");
        return;
      }

      const form = new FormData();

      form.append("productName", formData.productName);
      form.append("school", formData.school);
      form.append("price", formData.price);
      form.append("condition", formData.condition);
      form.append("description", formData.description);

      mediaFiles.forEach((file) => {
        form.append("media", file);
      });

      await axios.post(
        `https://campustrade-kku1.onrender.com/api/v1/products/${categoryId}/${subCategory}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Product created successfully!");
      setModalVisible(true);

      setFormData({
        productName: "",
        school: "",
        price: "",
        condition: "",
        description: "",
        media: [],
      });
      setMediaFiles([]);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://campustrade-kku1.onrender.com/api/v1/all-categories"
      );
      setAllCategories(response?.data?.data);
      setCategoryId(response?.data?.data[0]?.id);
      console.log(response.data.data)
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const getSubCategoryId = (id) => {
    setSubCategory(id);
  };
  console.log(subCategories)

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
              className="input-text-create22"
              readOnly
              value={school}
            />
          </div>

          <div className="create-post-inputs-right">
            <p className="create-post-p-tag">Category</p>
            <select
              className="input-text-create22"
              value={formData.category}
              onChange={(e) => {
                const selectedCategory = allCategories?.find(
                  (cat) => cat?.name === e.target.value
                );
                console.log(selectedCategory)
                handleInputChange('category', e.target.value);
                setSubCategories(selectedCategory?.Subcategories );
              }}
            >
              <option>Select category</option>
              {allCategories?.map((cat) => (
                <option key={cat?.id}>{cat?.name}</option>
              ))}
            </select>

            <p className="create-post-p-tag">Subcategory</p>

            <select
              className="input-text-create22"
              value={formData?.subcategory}
              onChange={(e) => {
                const selectedId = e.target.value;
                handleInputChange("subcategory", selectedId);
                getSubCategoryId(selectedId);
              }}
              disabled={!formData?.category}
            >
              <option value="">Select subcategory</option>
              {subCategories?.map((sub) => (
                <option key={sub?.id} value={sub?.id}>
                  {sub?.name}
                </option>
              ))}
            </select>
            <p className="create-post-p-tag">Price</p>
            <input
              type="tex"
              className="input-text-create22"
              value={formData?.price}
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
        <button>Pay 5% fee  </button>

          <button
            className="PostBtn"
            onClick={handleSubmit}
            style={{
              backgroundColor: isFormValid ? "rgb(60,9,108)" : "grey",
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
