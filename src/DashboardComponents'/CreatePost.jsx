import React, { useState } from 'react';
import "./createpost.css";

const categories = {
  gadget: ['mobile phone', 'tablets', 'laptops'],
  books: ['fictional', 'non-fiction', 'educational books'],
  cloths: ['jeans', 'shirt', 'blouse'],
  shoe: ['casual', 'heels', 'sneakers'],
  homeappliances: ['beds', 'kitchen utensil'],
};

const CreatePost = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [images, setImages] = useState([]);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }

    const fileReaders = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders).then(newImages => {
      setImages(prev => [...prev, ...newImages]);
    });
  };

  const handleRemoveImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className='createpost-wrapper'>
      <div className='createpost'>
        <div className='createpost-input-wrapper'>
          <div className='create-post-inputs-left'>
            <p className='create-post-p-tag'>Name of product</p>
            <input type="text" placeholder='' className='input-text-create' />

            <p className='create-post-p-tag'>School</p>
            <input type="text" placeholder='' className='input-text-create' />

            <p className='create-post-p-tag'>WhatsApp Link</p>
            <input
              type="text"
              placeholder='https://wa.me/234...'
              className='input-text-create'
              value={whatsappLink}
              onChange={(e) => setWhatsappLink(e.target.value)}
            />
          </div>

          <div className='create-post-inputs-rigt'>
            <p className='create-post-p-tag'>Category</p>
            <select
              className='input-text-create'
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select category</option>
              {Object.keys(categories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <p className='create-post-p-tag'>Subcategory</p>
            <select
              className='input-text-create'
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              disabled={!selectedCategory}
            >
              <option value="">Select subcategory</option>
              {selectedCategory && categories[selectedCategory].map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>

            <p className='create-post-p-tag'>Phone Number</p>
            <input type="text" placeholder='' className='input-text-create' />

            <p className='create-post-p-tag'>Price</p>
            <input type="text" placeholder='' className='input-text-create' />
          </div>
        </div>

        <div className='createpost-checkbox-wrapper'>
          <div className='condition-post'>Condition</div>
          <div className='checkbox-radio'>
            <input type="radio" name="condition" className='radio' />
            <p className='create-post-p-tag'>New</p>

            <input type="radio" name="condition" className='radio' />
            <p className='create-post-p-tag'>Used</p>
          </div>
        </div>

        <div className='createpost-description'>
          <input type="text" placeholder='Eg iPhone XR for sale...' className='describtion' />
        </div>

        <div className='createpost-dragdrop'>
          <p className='create-post-p-tag'>Upload your Image</p>

          {/* Hidden file input with camera access */}
          <label htmlFor="file-upload" className='draganddrop' style={{ border: '2px dashed grey', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
            Click to Upload / Take Photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          {/* Image previews with remove button */}
          <div className="image-preview">
            {images.map((img, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <img src={img} alt={`upload-${index}`} />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className='createpost-button'>
          <button className='PostBtn'>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
