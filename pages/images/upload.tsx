import React, { useState, useCallback } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import DropZone from '../../components/Upload/DropZone';
import ImagePreview from '../../components/Upload/ImagePreview';
import { Line } from 'rc-progress';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<any>(null);
  const [blurRadius, setBlurRadius] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [flopped, setFlopped] = useState(false);
  const [rotation, setRotation] = useState(0);

  const onDrop = useCallback((files) => {
    setFile(files[0]);
    setImage(URL.createObjectURL(files[0]));
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('image', file, file.name);
      formData.append('blurRadius', (1 + blurRadius / 2).toString());
      formData.append('flipped', flipped.toString());
      formData.append('flopped', flopped.toString());
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
            {image ? (
              <div className="ml-4">
                <ImagePreview
                  image={image}
                  rotation={rotation}
                  flipped={flipped}
                  flopped={flopped}
                  blur={blurRadius}
                />
                <div className="mb-2">
                  <label htmlFor="blur" className="flex">
                    Blur Radius ({blurRadius})
                  </label>
                  <input
                    id="blur"
                    type="range"
                    value={blurRadius}
                    min="0"
                    max="20"
                    step="0.1"
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
                    id="flipped"
                    type="checkbox"
                    checked={flipped}
                    onChange={(e) => setFlipped(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="flipped">Flip vertically</label>
                </div>
                <div className="mb-4 flex">
                  <input
                    id="flopped"
                    type="checkbox"
                    checked={flopped}
                    onChange={(e) => setFlopped(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="flopped">Flip horizontally</label>
                </div>
                <button
                  type="submit"
                  className="shadow bg-orange-500 py-2 px-4 rounded w-full"
                >
                  Upload
                </button>
                {uploadProgress && (
                  <Line
                    percent={
                      (uploadProgress?.loaded / uploadProgress?.total) * 100
                    }
                    strokeWidth={4}
                    strokeColor="#44aa44"
                    className="mt-4 mb-2"
                  />
                )}
              </div>
            ) : (
              <DropZone file={file} onDrop={onDrop} />
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Upload;
