import React from 'react';

const Rating = ({ rating, onRatingChange }) => {
  return (
    <div>
      <label>Valora la ciudad:</label>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => onRatingChange(value)}>
          {value <= rating ? '❤️' : '🤍'}
        </span>
      ))}
    </div>
  );
};

export default Rating;