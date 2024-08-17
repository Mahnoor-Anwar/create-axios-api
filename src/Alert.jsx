// Popup.js
import React from 'react';


const PopUp = ({ isOpen, onClose, message, title }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
