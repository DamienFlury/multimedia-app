import React from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {
  onDrop: (acceptedFiles: File[]) => void;
  file?: File | null;
};

const DropZone: React.FC<Props> = ({ file, onDrop }) => {
  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      className={`w-64 h-64 bg-gray-300 rounded shadow p-8 transition duration-500 text-gray-800 flex justify-center items-center overflow-hidden ${
        isDragActive && 'bg-green-500'
      }`}
    >
      <input {...getInputProps()} />
      {file ? (
        `File ${file.name} uploaded with the size of ${file.size / 1000} MB`
      ) : (
        <>
          <i className="material-icons px-4">get_app</i>
          <div>{isDragActive ? 'Release to drop' : 'Drag file here'}</div>
        </>
      )}
    </div>
  );
};

export default DropZone;
