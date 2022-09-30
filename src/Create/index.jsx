import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-color">
              Register For Event
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Event name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setEventName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="hmane"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Host name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="hname"
                  onChange={(e) => setHostName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Start and End time/date
              </label>
              <div className="flex justify-around items-start">
                <input
                  type="date"
                  name="start"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <input
                  type="date"
                  name="end"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Location
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="loaction"
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <label
              className="block text-sm font-medium text-gray-700 undefined"
              for="file_input"
            >
              Event Photo
            </label>
            <input
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              id="file_input"
              type="file"
            ></input>
            <div className="flex items-center mt-4">
              <Link to="/events">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Create
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
