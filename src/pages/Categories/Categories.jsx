import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/booksCategory`
      );
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <>
      <div className="my-6 space-y-1">
        <h1 className="text-3xl text-center font-bold">Our Top Categories</h1>
        <p className="text-center">
          Here are some of the Top Categories of the Books Available
        </p>
        <div className="flex items-center text-center w-96 mx-auto">
          <hr className="flex-grow border-black" />
          <div className="mx-2 text-3xl text-black">
            <FaBookOpen />
          </div>
          <hr className="flex-grow border-black" />
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center space-x-4 my-8">
          <span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Reveal
              key={category._id + index}
              cascade
              damping={0.1}
              triggerOnce
            >
              <Link to={`/selectedBooks/${category.name}`}>
                <div className="relative overflow-hidden border rounded-lg transition-transform duration-800 transform hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold mb-2">{category.name}</h2>
                    <p className="text-xl text-purple-500 hover:bg-slate-200 p-2 hover:rounded-full">
                      <FaArrowCircleRight />
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
};

export default Categories;
