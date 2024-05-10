import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { FaArrowCircleRight } from "react-icons/fa";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
      const response = await fetch("http://localhost:3001/booksCategory");
      if (!response.ok) {
        throw new Error("Failed to fetch Categories data");
      }
      const data = await response.json();
      setCategories(data);
      setLoading(false);
      setLoading(false);
    
  };

  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold my-6">Books Category</h1>
      </div>
      {loading ? (
        <div className="flex justify-center space-x-4 my-8">
          <span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((booksCategory, index) => (
            <Reveal
              key={booksCategory._id + index}
              cascade
              damping={0.1}
              triggerOnce
            >
              <Link to={`/selected/${booksCategory.name}`}>
                <div className="relative overflow-hidden border rounded-lg transition-transform duration-800 transform hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={booksCategory.image}
                    alt={booksCategory.name}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4 flex justify-between items-center ">
                    <h2 className="text-lg font-bold mb-2">
                      {booksCategory.name}
                    </h2>
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