import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="mt-2.5">
      <h1 className="text-center text-3xl md:text-6xl text-black font-bold">
        Imagine if
      </h1>
      <h1 className="text-center text-3xl md:text-6xl  text-color font-bold">
        Snapchat
      </h1>
      <h1 className="text-center text-3xl  md:text-6xl text-black font-bold">
        had events.
      </h1>
      <p className="m-auto text-center mt-2.5 mb-3  md:text-4xl text-gray-600 w-3/4">
        Easily host and share events with your friends across any social media.
      </p>
      <div className=" rounded-md">
        <img
          src="images/landingPage.svg"
          alt="landing_Image"
          className="m-auto  xs:w-80 md:w-2/4 md:mb-2.5"
        />
      </div>
      <Link to="/create">
        <button className="btn-bg xs:w-80 md:w-2/4 rounded-md mt-2.5 mb-2.5 h-8 text-white md:h-10 ">
          🎉 Create my event
        </button>
      </Link>
    </div>
  );
};

export default Home;
