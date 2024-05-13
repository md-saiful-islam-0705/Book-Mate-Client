import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/borrowedBooks?userEmail=${
            user.email
          }`
        );
        setBorrowedBooks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
        setIsLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, [user.email]);

  // ----Return-----

  const handleReturnBook = async (bookId) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/books/return/${bookId}`);
    setBorrowedBooks(borrowedBooks.filter((book) => book._id !== bookId));

    Swal.fire({
      title: "Success!",
      text: "Book Return successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-4">Borrowed Books</h1>
      <div className="flex-grow m-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  lg:m-0">
        {borrowedBooks.map((book) => (
          <div
            className="card w-full h-[500px] border-2 glass flex flex-col shadow-md mx-auto transition-transform duration-800 transform hover:-translate-y-1 hover:shadow-xl"
            key={book._id}
          >
            <figure className="">
              <img
                src={book.bookImage}
                alt=""
                className="w-full h-96 mt-4 p-2 object-cover"
              />
            </figure>
            <div className="flex-grow flex flex-col justify-between p-4">
              <div className="">
                <div className="flex justify-between">
                  <h2 className="font-bold">{book.bookName}</h2>
                  <p className="font-semibold text-gray-500">
                    {book.bookCategory}
                  </p>
                </div>
                <div className="my-2">
                  <div className="flex text-blue-400 justify-between font-semibold items-center">
                    <p>Borrowed</p>
                    <p>{new Date(book.borrowedDate).toLocaleDateString()}</p>
                  </div>
                  <div className="text-red-400 font-semibold flex justify-between items-center">
                    <p>Return</p>
                    <p>{new Date(book.returnDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <button
                  className="btn btn-outline my-1"
                  onClick={() => handleReturnBook(book._id)}
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BorrowedBooks;
