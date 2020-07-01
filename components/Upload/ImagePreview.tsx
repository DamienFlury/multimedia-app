import React from 'react';

type Props = {
  image: string;
  rotation: number;
  flipped: boolean;
  blur: number;
};

const ImagePreview: React.FC<Props> = ({ image, rotation, flipped, blur }) => (
  <div
    style={{ height: 200, width: 200 }}
    className="flex justify-center items-center bg-gray-200"
  >
    <img
      src={image}
      style={{
        transform: `rotate(${rotation}deg) scaleY(${flipped ? -1 : 1})`,
        maxWidth: 200,
        maxHeight: 200,
        filter: `blur(${blur / 2}px)`,
      }}
    />
  </div>
);
export default ImagePreview;
