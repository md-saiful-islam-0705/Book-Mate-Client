import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HoverRating from "../components/HoverRating";
import axios from "axios";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import Modal from "../components/Modal";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [returnDate, setReturnDate] = useState(""); 

  useEffect(() => {
    const fetchBookDetails = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/books/${id}`
        );
        setBook(response.data);
        setLoading(false);
    };

    fetchBookDetails();
  }, [id]);

  const handleBorrow = async () => {
      setShowModal(false); 
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto ">
        <div className="bg-gray-100 shadow-md rounded-lg p-8 m-4">
          {book && (
            <>
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-full object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <HoverRating value={book.rating} readOnly />
              <p className="text-gray-700 mt-4">{book.description}</p>
              <button className="btn btn-outline hover:border-none hover:bg-purple-500 mt-4" onClick={() => setShowModal(true)}>Borrow</button>
            </>
          )}
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
        handleBorrow={handleBorrow}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
      />
    </div>
  );
};

export default BookDetails;
