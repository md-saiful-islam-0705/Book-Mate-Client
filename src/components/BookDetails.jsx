import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HoverRating from "../components/HoverRating";
import axios from "axios";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import Modal from "../components/Modal";
import { AuthContext } from "../providers/AuthProvider";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Fetch Book Details
    const fetchBookDetails = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/books/${id}`
      );
      setBook(response.data);
    };
    // Fetch Borrow Book 
    const fetchBorrowedBooks = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/borrowedBooks?userEmail=${user.email}`
      );
      setBorrowedBooks(response.data);
    };

    fetchBookDetails();
    fetchBorrowedBooks();
  }, [id, user.email]);

  const handleBorrow = async () => {
    setShowModal(false);
  };

  // if the book is already borrowed by user
  const isBookBorrowed = borrowedBooks.some(
    (borrowedBook) => borrowedBook.bookId === id
  );
  const isQuantityZero = book && book.quantity === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <div className="bg-gray-100 shadow-md rounded-lg p-8 m-4">
          {book && (
            <>
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-full object-cover mb-4 rounded-lg"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
                <p className="font-bold text-xl text-purple-500">{`Quantity: ${book.quantity} `}</p>
              </div>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <HoverRating value={book.rating} readOnly />
              <p className="text-gray-700 mt-4">{book.description}</p>
              <button
                className={`btn btn-outline hover:border-none hover:bg-purple-500 mt-4 ${
                  isBookBorrowed || isQuantityZero
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => setShowModal(true)}
                disabled={isBookBorrowed || isQuantityZero}
              >
                Borrow
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
        handleBorrow={handleBorrow}
        bookId={book ? book._id : null}
        bookName={book ? book.name : ""}
        bookImage={book ? book.image : ""}
        bookCategory={book ? book.category : ""}
      />
    </div>
  );
};

export default BookDetails;
