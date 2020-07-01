import React from 'react';

type Props = {
  image: string | null;
  rotation: number;
};

const ImagePreview: React.FC<Props> = ({ image, rotation }) => (
  <div
    style={{ height: 200, width: 200 }}
    className="flex justify-center items-center bg-gray-200"
  >
    {image ? (
      <img
        src={image}
        style={{
          transform: `rotate(${rotation}deg)`,
          maxWidth: 200,
          maxHeight: 200,
        }}
      />
    ) : (
      <span>Placeholder</span>
    )}
  </div>
);
export default ImagePreview;
