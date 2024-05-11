import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import BookCard from "../../components/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
        setBooks(response.data);
        setLoading(false);
    };

    fetchBooks();

    return () => {
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow m-2">
        <h1 className="text-3xl font-bold mb-4">All Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-0">
          {loading ? (
            <p>Loading...</p>
          ) : (
            books.map((book) => <BookCard key={book._id} book={book} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBooks;
