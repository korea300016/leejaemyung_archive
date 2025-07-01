import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white py-4 px-8 rounded-lg hover:bg-secondary transition"
    >
      {children}
    </button>
  );
} 