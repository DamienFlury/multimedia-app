import React, { useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] ?? null);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('image', file, 'image.png');
      axios.post('/api/upload', formData);
    }
  };
  return (
    <Layout title="Upload">
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect} />
        <button type="submit">Upload</button>
      </form>
    </Layout>
  );
};

export default Upload;
