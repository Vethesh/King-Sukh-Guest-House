import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Palash from "./Img/palash.webp";
import { AiOutlineSafety, AiOutlineClockCircle } from "react-icons/ai";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,  
            offset: 200,      
            once: true        
        });
    }, []);
  return (
    <div
      id="services"
      className="flex flex-col md:flex-row items-center md:items-start gap-10 p-6 md:p-16 bg-gray-100"
    >
      {/* Left Section - Image */}
      <div className="md:w-1/2" data-aos="fade-right">
        <img
          src={Palash} // Replace with your image path
          alt="Beautiful Trees"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="md:w-1/2 space-y-10gv">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">
          SERVICES-------{" "}
        </h2>
        <h2 className="text-3xl font-bold text-gray-800">
          Strive Only For The Best.
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-4" data-aos="fade-left">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <AiOutlineSafety className="w-6 h-6" />
            </span>
            <span className="text-lg font-medium text-gray-700">
              High Class Security
            </span>
          </li>

          <li className="flex items-center gap-4" data-aos="fade-left">
            <span className="bg-pink-100 text-pink-600 p-2 rounded-full">
              <AiOutlineClockCircle className="w-6 h-6" />
            </span>
            <span className="text-lg font-medium text-gray-700">
              24 Hours Room Service
            </span>
          </li>

          <li className="flex items-center gap-4" data-aos="fade-left">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
              <FaUtensils className="w-6 h-6" />
            </span>
            <span className="text-lg font-medium text-gray-700">
              Restaurant
            </span>
          </li>

          <li className="flex items-center gap-4" data-aos="fade-left">
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              <FaMapMarkerAlt className="w-6 h-6" />
            </span>
            <span className="text-lg font-medium text-gray-700">
              Tourist Guide Support
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;


const App = () => {
  return (
      <div>
          <div className="flex items-center justify-center h-screen bg-gray-50">
              <div className="flex w-full max-w-3xl rounded-lg bg-white shadow-md">
                  {/* First Stat */}
                  <div className="flex-1 text-center border-r border-gray-200 p-8">
                      <h2 className="text-4xl font-bold text-gray-800">100+</h2>
                      <p className="mt-2 text-gray-500">Bookings Completed</p>
                  </div>
                  {/* Second Stat */}
                  <div className="flex-1 text-center p-8">
                      <h2 className="text-4xl font-bold text-gray-800">150+</h2>
                      <p className="mt-2 text-gray-500">Happy Customers</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

// Render the App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

