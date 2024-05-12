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
    <div className="card w-full h-[500px] border-2 glass flex flex-col shadow-md mx-auto transition-transform duration-800 transform hover:-translate-y-1 hover:shadow-xl ">
      <figure className="">
        <img src={image} alt={name} className="w-full h-96 mt-4 p-2 object-cover" />
      </figure>
      <div className="flex-grow flex flex-col justify-between p-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold text-gray-500">Quantity: {quantity}</p>
          <p className="font-semibold text-gray-500">Category: {category}</p>
          <HoverRating value={currentRating} onChange={handleRatingChange} />
        </div>
        <div className="card-actions flex justify-end"> 
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
