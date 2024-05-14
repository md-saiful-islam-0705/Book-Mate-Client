import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    image: "",
    name: "",
    quantity: "",
    author: "",
    category: "",
    rating: "",
    description: "",
  });

  const categories = [
    "Travel",
    "Computer and Tech",
    "Business",
    "Health and Fitness",
    "Education",
    "Sports",
  ];

  useEffect(() => {
    const fetchBookData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/books/${id}`
      );
      console.log("Fetched book data");
      setBookData(response.data);
    };

    fetchBookData();
  }, [id]);

  const handleUpdateBook = async (event) => {
    event.preventDefault();

    const updatedBookData = {
      image: event.target.image.value,
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      author: event.target.author.value,
      category: event.target.category.value,
      rating: event.target.rating.value,
      description: event.target.description.value,
    };

    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/books/${id}`,
      updatedBookData
    );
    Swal.fire({
      title: "Success!",
      text: "Book updated successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    navigate("/allBooks");
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto lg:w-2/3 w-full  my-9 border rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-7">
        <h2 className="text-3xl text-center text-gray-100 font-bold mb-6">
          Update Book
        </h2>
        <form onSubmit={handleUpdateBook} className="space-y-4">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block font-bold">
                Image URL:
                <input
                  type="text"
                  name="image"
                  defaultValue={bookData.image}
                  className="form-input font-normal text-gray-500 p-4 mt-1 block w-full rounded-md"
                />
              </label>
            </div>
            <div>
              <label className="block font-bold">
                Name:
                <input
                  type="text"
                  name="name"
                  defaultValue={bookData.name}
                  className="form-input font-normal text-gray-500 p-4 mt-1 block w-full rounded-md"
                />
              </label>
            </div>
            <div>
              <label className="block font-bold">
                Quantity:(1/2/3...)
                <input
                  type="text"
                  name="quantity"
                  defaultValue={bookData.quantity}
                  className="form-input font-normal text-gray-500 p-4 mt-1 block w-full rounded-md"
                />
              </label>
            </div>
            <div>
              <label className="block font-bold">
                Author:
                <input
                  type="text"
                  name="author"
                  defaultValue={bookData.author}
                  className="form-input font-normal text-gray-500 p-4 mt-1 block w-full rounded-md"
                />
              </label>
            </div>
            <div>
              <label className="block font-bold">
                Category:
                <select
                  name="category"
                  value={bookData.category}
                  className="form-select p-4 mt-1 block w-full rounded-md"
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label className="block font-bold">
                Rating:(1-5)
                <input
                  type="text"
                  name="rating"
                  defaultValue={bookData.rating}
                  className="form-input font-normal text-gray-500 p-4 mt-1 block w-full rounded-md"
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block font-bold">
              Description:
              <textarea
                type="text"
                name="description"
                defaultValue={bookData.description}
                className="form-input font-normal text-gray-500 p-4 mt-1 block w-full rounded-md"
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateBook;
