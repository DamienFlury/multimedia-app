import React, { useState } from 'react';

type Props = {
  className?: string;
};

const NavDropdown: React.FC<Props> = ({ children, className }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      <button className={className} onClick={handleClick}>
        open
      </button>
      {open && (
        <div className="absolute t-100 p-4 bg-white shadow-lg text-gray-800 rounded">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
