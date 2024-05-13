import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import BookCard from "../../components/BookCard";
import BookTable from "../../components/BookTable";
import { GiBookshelf } from "react-icons/gi";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAvailable, setShowAvailable] = useState(false);
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      setBooks(response.data);
      setLoading(false);
    };

    fetchBooks();

    return () => {};
  }, []);

  // Filter books based on availability
  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow m-2">
        <h1 className="text-3xl font-bold mt-4 text-center">All Books</h1>
        <div className="flex justify-around items-center shadow rounded-xl p-4 mt-4">
          <button
            className="btn btn-outline btn-md hover:border-none"
            onClick={() => setShowAvailable(!showAvailable)}
          >
            {showAvailable ? "Show All Books" : "Show Available Books"}
          </button>

          <div className="text-5xl text-purple-700">
            <GiBookshelf />
          </div>
          <div className="">
            <select
              className="form-select p-3  rounded-lg btn btn-outline "
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
            >
              <option value="card">Card View</option>
              <option value="table">Table View</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-20 lg:m-0">
          {loading ? (
            <div className="flex justify-center space-x-4 my-8">
              <span className="loading loading-spinner text-primary"></span>
              <span className="loading loading-spinner text-secondary"></span>
              <span className="loading loading-spinner text-accent"></span>
            </div>
          ) : viewType === "card" ? (
            filteredBooks.map((book) => <BookCard key={book._id} book={book} />)
          ) : (
            <BookTable books={filteredBooks} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBooks;
