// SimpleButton.tsx
import React from 'react';

interface SimpleButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 15px',
        borderRadius: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '5px',
        border: '2px solid #343a40',
        fontSize: '12px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
