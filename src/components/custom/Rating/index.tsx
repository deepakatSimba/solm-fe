import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating, setRating }: any) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseOver = (value: any) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (value: any) => {
    setRating(value);
  };

  const renderStar = (index: number) => {
    const filled = index <= (hoveredRating || rating);
    return (
      <span
        key={index}
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
        className={`cursor-pointer ${
          filled ? "text-yellow-500" : "text-gray-300"
        } text-2xl`}
      >
        <FaStar />
      </span>
    );
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => renderStar(index))}
    </div>
  );
};

export default Rating;
