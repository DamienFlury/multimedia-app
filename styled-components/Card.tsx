import React from 'react';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
};

const Card: React.FC<Props> = ({ children, onClick }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={onClick}>
    {children}
  </div>
);

export default Card;
