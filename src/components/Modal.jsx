import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Modal = ({
  isOpen,
  handleClose,
  handleBorrow,
  returnDate,
  setReturnDate,
}) => {
  if (!isOpen) {
    return null;
  }
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBorrow(returnDate);
  };

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box p-9 relative">
        <form onSubmit={handleSubmit} method="dialog ">
          {/* Close button */}
          <button
            type="button"
            className="btn btn-sm bg-red-500 text-white  btn-ghost absolute right-1 top-1 "
            onClick={handleClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-xl">Borrow Book</h3>
          <div className="mt-4">
            <label htmlFor="userName" className="block text-sm font-semibold text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="userName"
              className="mt-1 block w-full border-none  text-gray-500 font-medium rounded shadow-sm "
              value={user.displayName}
              readOnly
            />
          </div>
          <div className="mt-4">
            <label htmlFor="userEmail" className="block text-sm font-semibold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="userEmail"
              className="mt-1 block w-full border-none text-gray-500 font-medium rounded shadow-sm "
              value={user.email}
              readOnly
            />
          </div>
          <div className="mt-4">
            <label htmlFor="returnDate" className="block text-sm font-semibold text-gray-700">
              Return Date:
            </label>
            <input
              type="date"
              id="returnDate"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm "
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-outline btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
