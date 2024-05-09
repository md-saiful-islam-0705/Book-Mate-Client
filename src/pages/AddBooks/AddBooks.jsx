import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Swal from "sweetalert2";

const AddBook = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    quantity: "",
    author: "",
    category: "",
    rating: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Your form submission logic here
      console.log(formData);
      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Book added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      // Reset form data after successful submission
      setFormData({
        image: "",
        name: "",
        quantity: "",
        author: "",
        category: "",
        rating: "",
        description: "",
      });
    }
  };
  

  const validateForm = () => {
    const { image, name, quantity, author, category, rating, description } = formData;

    if (!image || !name || !quantity || !author || !category || !rating || !description) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }

    // Validate numeric fields
    if (isNaN(Number(quantity)) || isNaN(Number(rating))) {
      Swal.fire({
        title: "Error!",
        text: "Quantity and Rating must be numeric values.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }

    return true;
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto border  p-2 lg:p-5 md:p-4 rounded-md mb-10 shadow">
        <h2 className="text-3xl text-center font-bold mb-4">Add Book</h2>
        <form
          className="mx-auto bg-gradient-to-br from-blue-500 to-purple-500 p-3 lg:p-7 md:p-5 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rating (1-5)"
                className="input input-bordered"
                min="1"
                max="5"
              />
            </div>
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none">
              Add Book
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddBook;
