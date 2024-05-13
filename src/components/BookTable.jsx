import React from "react";
import PropTypes from "prop-types";

const BookTable = ({ books }) => {
  return (
    <div className=" container mx-auto overflow-x-auto md:overflow-x-visible lg:overflow-x-visible m-5">
      <table className=" w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BookTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BookTable;
