import React, { useState, useCallback } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { DndProvider, DropTargetMonitor } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TargetBox } from '../../components/TargetBox';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileDrop = useCallback(
    (item: any, monitor: DropTargetMonitor) => {
      if (monitor) {
        const files = monitor.getItem().files;
        setFile(files[0]);
      }
    },
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('image', file, file.name);
      axios.post('/api/upload', formData, {
        onUploadProgress: (progress) => setUploadProgress(progress.loaded),
      });
    }
  };
  return (
    <Layout title="Upload">
      <div className="container mx-auto">
        <h1 className="text-5xl my-4">Upload</h1>
        <form onSubmit={handleSubmit} className="my-4">
          <DndProvider backend={HTML5Backend}>
            <TargetBox onDrop={handleFileDrop}>
              {file &&
                `File ${file.name} uploaded with the size of ${
                  file.size / 1000
                } MB`}
            </TargetBox>
          </DndProvider>
          <p>{uploadProgress}</p>
          <button
            type="submit"
            className="shadow bg-orange-500 py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Upload;
