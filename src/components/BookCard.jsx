import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import HoverRating from "./HoverRating";
import { useState } from "react";

const BookCard = ({ book }) => {
  const { _id, image, name, quantity, category, rating } = book;
  const [currentRating, setCurrentRating] = useState(rating);

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="card w-full border glass flex flex-col shadow-md ">
      <figure className="">
        <img src={image} alt={name} className="w-full h-96 mt-4 p-2" />
      </figure>
      <div className="flex-grow flex flex-col justify-between p-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <HoverRating value={currentRating} onChange={handleRatingChange} />
        </div>
        <div className="card-actions mt-auto flex justify-end"> 
          <Link to={`updateBook/${_id}`}>
            <p className="text-3xl hover:text-purple-500 hover:bg-gray-100 p-2 rounded-md"><FaEdit /></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
