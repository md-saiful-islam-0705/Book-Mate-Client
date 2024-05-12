import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import HoverRating from "../../components/HoverRating";

const SelectedBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooksByCategory();
  }, [category]);

  const fetchBooksByCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/books?category=${category}`
      );
      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books by category:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto flex-grow">
        <h1 className="text-2xl text-center font-bold my-8">Books in Category:<span className="text-purple-500">{` ${category}`}</span></h1>
        {loading ? (
          <div className="flex justify-center space-x-4 my-8">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
          </div>
        ) : books.length === 0 ? (
          <p>No books found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <div key={book._id} className="border p-4 rounded-lg shadow-md">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-48 object-cover mb-2"
                />
                <h2 className="text-lg font-bold text-gray-500 ">{book.name}</h2>
                <p className="text-gray-500">{book.author}</p>
                <HoverRating value={book.rating} readOnly />
                <div className="card-actions flex justify-end">
                  <button className=" btn btn-sm btn-outline mt-2 rounded hover:bg-purple-500 hover:border-none">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default SelectedBooks;
