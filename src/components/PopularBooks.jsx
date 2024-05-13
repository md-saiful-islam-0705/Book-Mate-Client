import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { FaBook } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import axios from "axios";


const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularBooks();
  }, []);

  const fetchPopularBooks = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/popularBooks`);
      setPopularBooks(response.data);
      setLoading(false);
  };
  

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <div className="my-9 space-y-1">
        <h1 className="text-3xl text-center font-bold">Most Popular Books</h1>
        <p className="text-center">
          The Most Popular Books Today are available in Book Library
        </p>
        <div className="flex items-center text-center w-48 mx-auto">
          <hr className="flex-grow border-black" />
          <div className="mx-2 text-3xl text-black">
            <FaBook />
          </div>
          <hr className="flex-grow border-black" />
        </div>
      </div>
      <div className="flex bg-gray-50 p-4 rounded-lg flex-col-reverse lg:flex-row md:flex-col-reverse gap-4">
        <div className="lg:w-2/3 md:w-full w-full m-2 bg-white">
          {selectedBook ? (
            <div className=" p-4 rounded-lg shadow-md relative border">
              <h2 className="text-xl font-bold mb-2">{selectedBook.name}</h2>
              <img
                src={selectedBook.image}
                alt={selectedBook.name}
                className="w-50 h-40 rounded-md"
              />
              <p className="text-gray-500" >{selectedBook.description}</p>
              <p className="text-purple-500">Author: {selectedBook.author}</p>
              <p className="text-gray-600 font-semibold">
                Price: {selectedBook.price}
              </p>
              <button
                className=" absolute -top-3 -left-3 btn btn-sm border-none text-white btn-circle btn-outline  bg-red-500"
                onClick={() => setSelectedBook(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className=" flex justify-center gap-4 items-center pt-32 ">
              <p className="text-xl font-semibold text-black">
                Click a <span className="text-pink-500">book</span> to view
                details{" "}
              </p>
              <p className="text-3xl text-purple-600 ">
                {" "}
                <TbHandClick />
              </p>
            </div>
          )}
        </div>
        <div className="lg:w-2/3 w-full md:w-full">
          {loading ? (
            <div className="flex justify-center space-x-4 my-8">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {popularBooks.map((book, index) => (
                <Reveal key={index} cascade damping={0.1} triggerOnce>
                  <div
                    className=" mx-auto m-2 overflow-hidden bg-white border p-1 rounded-lg transition-transform duration-800 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                    onClick={() => handleBookClick(book)}
                  >
                    <img
                      src={book.image}
                      alt={book.name}
                      className="lg:h-80 md:h-96 md:w-96 h-full w-full p-2 rounded"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PopularBooks;
