// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);
    // Add logic to send formData to the server
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    // Handle the response as needed
    const data = await response.json();
    console.log(data);
    setFileName(data);
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <img className='w-12' src={`/uploads/${fileName?.fileName}`} alt="" />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
