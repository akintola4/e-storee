import React, { useState } from 'react';

const ReadOnlyStarRating = ({ rating }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span 
          key={index}
          className={`star md:text-1xl ${index + 1 <= (hoveredRating || rating) ? 'filled' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733; {/* Unicode character for a star */}
        </span>
      ))}
    </div>
  );
};

export default ReadOnlyStarRating;