import React, { useState, useCallback } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { DropTargetMonitor } from 'react-dnd';
import DropZone from '../../components/Upload/DropZone';
import ImagePreview from '../../components/Upload/ImagePreview';
import { Line } from 'rc-progress';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<any>(null);
  const [blurRadius, setBlurRadius] = useState(0);
  const [flip, setFlip] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleFileDrop = useCallback(
    (item: any, monitor: DropTargetMonitor) => {
      if (monitor) {
        const files = monitor.getItem().files;
        setFile(files[0]);
        setImage(URL.createObjectURL(files[0]));
      }
    },
    []
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('image', file, file.name);
      formData.append('blurRadius', blurRadius.toString());
      formData.append('flipped', flip.toString());
      formData.append('rotation', rotation.toString());
      axios.post('/api/upload', formData, {
        onUploadProgress: (progress) => setUploadProgress(progress),
      });
    }
  };
  return (
    <Layout title="Upload">
      <div className="container mx-auto">
        <h1 className="text-5xl my-4">Upload</h1>
        <form onSubmit={handleSubmit} className="my-4">
          <div className="flex">
            <DropZone file={file} onDrop={handleFileDrop} />
            <div className="ml-4">
              <ImagePreview image={image} rotation={rotation} />
              <div className="mb-2">
                <label htmlFor="blur" className="flex">
                  Blur Radius ({blurRadius})
                </label>
                <input
                  id="blur"
                  type="range"
                  value={blurRadius}
                  min="0"
                  max="60"
                  onChange={(e) => setBlurRadius(+e.target.value)}
                  className="mr-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="rotation" className="flex">
                  Rotate by ({rotation}) degrees
                </label>
                <input
                  id="rotation"
                  type="range"
                  value={rotation}
                  min="0"
                  max="360"
                  onChange={(e) => setRotation(+e.target.value)}
                  className="mr-2"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  id="flip"
                  type="checkbox"
                  checked={flip}
                  onChange={(e) => setFlip(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="flip">Flipped</label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="shadow bg-orange-500 py-2 px-4 rounded"
          >
            Upload
          </button>
          {uploadProgress && (
            <Line
              percent={(uploadProgress?.loaded / uploadProgress?.total) * 100}
              strokeWidth={1}
              strokeColor="#44aa44"
            />
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Upload;
