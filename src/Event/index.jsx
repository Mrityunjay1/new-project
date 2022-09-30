import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Event = () => {
  return (
    <div>
      <img
        src="images/Birthday_cake.png"
        alt="landing_Image"
        className="m-auto sm:w-3/4 md:w-52 h-3/4"
      />
      <p className="font-bold text-left ml-2.5 mt-2.5 text-lg">Birthday Bash</p>
      <p className="text-left ml-2.5 mt-2.5">Hosted by Elysia</p>

      <div className="ml-2.5 flex mt-2.5 align-center justify-between">
        <div className="flex align-center">
          <FaCalendarAlt className="bg-white" />
          <p className="ml-4 w-8">
            18 August 6:00PM to 19 August 1:00PM UTC +10
          </p>
        </div>
        <FaCalendarAlt className="bg-white" />
      </div>
      <div className="ml-2.5 flex mt-2.5 align-center justify-between">
        <div className="flex align-center">
          <FaCalendarAlt className="bg-white" />
          <p className="ml-4 w-8">
            18 August 6:00PM to 19 August 1:00PM UTC +10
          </p>
        </div>
        <FaCalendarAlt className="bg-white" />
      </div>
    </div>
  );
};

export default Event;
