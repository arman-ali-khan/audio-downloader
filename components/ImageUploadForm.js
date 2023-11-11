// components/ImageUploadForm.js
import React from 'react';

const ImageUploadForm = ({ onFileChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <label htmlFor="image">Choose an image:</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={onFileChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUploadForm;
