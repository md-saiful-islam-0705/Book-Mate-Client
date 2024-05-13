import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Modal = ({
  isOpen,
  handleClose,
  bookId,
  bookName,
  bookImage,
  bookCategory,
}) => {
  const { user } = useContext(AuthContext);
  const [returnDate, setReturnDate] = useState("");
  const [borrowedDate, setBorrowedDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const currentDate = new Date();
    const returnDateObj = new Date(returnDate);
    // return date can't be earlier than current date
    if (returnDateObj <= currentDate) {
      setIsLoading(false);
      return;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/borrowedBooks`,
      {
        bookId,
        userEmail: user.email,
        borrowedDate,
        returnDate,
        bookName,
        bookImage,
        bookCategory,
      }
    );
    console.log(response.data);
    Swal.fire({
      title: "Success!",
      text: "Book borrowed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    setIsLoading(false);
    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box p-9 relative">
        <form onSubmit={handleSubmit} method="dialog">
          <button
            type="button"
            className="btn btn-sm bg-red-500 text-white btn-ghost absolute right-1 top-1"
            onClick={handleClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-xl">Borrow Book</h3>
          <input type="hidden" name="bookName" value={bookName} />
          <input type="hidden" name="bookImage" value={bookImage} />
          <input type="hidden" name="bookCategory" value={bookCategory} />
          <div className="mt-4">
            <label
              htmlFor="userName"
              className="block text-sm font-semibold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="userName"
              className="mt-1 block w-full border-none text-gray-500 font-medium rounded shadow-sm"
              value={user.displayName}
              readOnly
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="userEmail"
              className="block text-sm font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="userEmail"
              className="mt-1 block w-full border-none text-gray-500 font-medium rounded shadow-sm"
              value={user.email}
              readOnly
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="borrowedDate"
              className="block text-sm font-semibold text-gray-700"
            >
              Borrowed Date:
            </label>
            <input
              type="date"
              id="borrowedDate"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={borrowedDate}
              onChange={(e) => setBorrowedDate(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="returnDate"
              className="block text-sm font-semibold text-gray-700"
            >
              Return Date:
            </label>
            <input
              type="date"
              id="returnDate"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-outline btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
