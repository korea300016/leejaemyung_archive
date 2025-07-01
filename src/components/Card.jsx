import React from 'react';

export default function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-100">
      {children}
    </div>
  );
} 