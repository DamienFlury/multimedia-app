import React from 'react';

type Props = {
  image: string;
  rotation: number;
  flipped: boolean;
  flopped: boolean;
  blur: number;
};

const ImagePreview: React.FC<Props> = ({
  image,
  rotation,
  flipped,
  flopped,
  blur,
}) => (
  <div
    style={{ height: 400, width: 400 }}
    className="flex justify-center items-center bg-gray-200"
  >
    <img
      src={image}
      style={{
        transform: `rotate(${rotation}deg) scaleY(${flipped ? -1 : 1}) scaleX(${
          flopped ? -1 : 1
        })`,
        maxWidth: 400,
        maxHeight: 400,
        filter: `blur(${blur / 2}px)`,
      }}
    />
  </div>
);
export default ImagePreview;
