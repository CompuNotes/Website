// src/components/FileRating.js
import React from 'react';
import { addRating } from '../services/ratingService';

const FileRating = ({ fileId }) => {
  const handleRating = async (rating) => {
    const result = await addRating(fileId, rating);
    if (result.success) {
      alert('Rating añadido con éxito.');
    } else {
      alert(result.message || 'Error al añadir rating.');
    }
  };

  return (
    <div>
      <button onClick={() => handleRating(1)}>1</button>
      <button onClick={() => handleRating(2)}>2</button>
      <button onClick={() => handleRating(3)}>3</button>
      <button onClick={() => handleRating(4)}>4</button>
      <button onClick={() => handleRating(5)}>5</button>
    </div>
  );
};

export default FileRating;