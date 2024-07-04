import React from 'react';
import "./rating.scss"

const Rating = ({ rating, onRatingChange }) => {
  return (
    <div className='loveCity'>
      <div className='ratingLabel'>
      <label>Valora la ciudad:</label>
      </div>
      <div className='ratingValue'>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => onRatingChange(value)}>
          {value <= rating ? '❤️' : '🤍'}
        </span>
      ))} 
      </div>
    </div>
  );
};

export default Rating;