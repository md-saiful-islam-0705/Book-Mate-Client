import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full lg:rounded-2xl md:rounded-xl relative">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/0rHL9M4/Banner-1.jpg"
          className="w-full"
          alt="Slide 1"
        />
        <div className="absolute flex flex-col text-xl items-end transform -translate-y-1/2 left-2 md:left-5 lg:left-10 bottom-0 text-white gap-2 md:gap-3 lg:gap-3">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
        <div className="absolute flex justify-between items-end transform -translate-y-1/2 right-5 bottom-0 gap-2">
          <a
            href="#slide4"
            className="btn lg:btn-md  md:btn-md btn-sm btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn lg:btn-md  md:btn-md btn-sm btn-circle"
          >
            ❯
          </a>
        </div>
        <div className="absolute bottom-5 left-0 right-0 text-center">
          {/* <Link to="/contact">
            <button className="bg-gradient-to-r from-violet-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </Link> */}
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/0rSX3yq/Banner-2.jpg"
          className="w-full"
          alt="Slide 2"
        />
        <div className="absolute flex justify-between items-end transform -translate-y-1/2 right-5 bottom-0 gap-2">
          <a
            href="#slide1"
            className="btn lg:btn-md  md:btn-md btn-sm btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn lg:btn-md  md:btn-md btn-sm btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/MptYbh5/Banner-3.jpg"
          className="w-full"
          alt="Slide 3"
        />
        <div className="absolute flex justify-between items-end transform -translate-y-1/2 right-5 bottom-0 gap-2">
          <a
            href="#slide2"
            className="btn lg:btn-md  md:btn-md btn-sm btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn lg:btn-md  md:btn-md btn-sm btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
