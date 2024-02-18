// import { useState, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Recycle = () => {
  const [location, setLocation] = useState("");

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-green-300">
        <div className="max-w-[1280px] mx-auto bg-white rounded-lg shadow-xl">
          <div className="w-[600px] mx-auto border-[1.5px] border-black rounded-lg px-4 py-6 ">
            <div className="text-center">
              <h1 className="text-[40px] text-green-500 ">Book For Pickup</h1>
            </div>
            <div className="w-full">
              <form>
                <div className="flex justify-between">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-[2px] border-green-500 py-2 px-4 rounded-md w-full m-3"
                    required="true"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="border-[2px] border-green-500 py-2 px-4 rounded-md w-full m-3"
                  />
                </div>
                <div className="flex justify-between">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-[2px] border-green-500 py-2 px-4 rounded-md w-full m-3"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    className="border-[2px] border-green-500 py-2 px-4 rounded-md w-full m-3"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    placeholder="Your Address"
                    className="border-[2px] border-green-500 py-2 px-4 rounded-md w-[60%] m-3"
                  />
                </div>
              </form>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-green-400 px-5 py-2 text-white font-semibold rounded-sm"
                >
                  <Link to="map">Send</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recycle;
