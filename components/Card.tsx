import React, { useState } from 'react';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  image?: string;
  title?: string;
};

const Card: React.FC<Props> = ({ image, title, onClick }) => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div
      className="rounded shadow-md overflow-hidden bg-default-700 transition duration-200"
      onClick={onClick}
    >
      <div
        onMouseMove={(e) => {
          setIndex(e.clientX);
        }}
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="h-56 w-full bg-cover bg-center"
      />
      {title && (
        <div className="px-6 py-4">
          <div className="text-xl">{title}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
