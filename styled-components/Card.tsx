import React from 'react';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  image?: string;
  title?: string;
};

const Card: React.FC<Props> = ({ image, title, onClick }) => (
  <div className="rounded shadow-md overflow-hidden" onClick={onClick}>
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="h-56 w-full bg-cover bg-center"
    />
    {title && (
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-800">{title}</div>
      </div>
    )}
  </div>
);

export default Card;
