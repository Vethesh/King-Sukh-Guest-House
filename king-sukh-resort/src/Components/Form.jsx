import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Form = () => {

    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2">
     
        <div className="bg-pink-500 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="material-icons mr-3">Place:</span>
                <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-3">Email:</span>
                <p>kkghosh0099@gmail.com</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-3">Phone:</span>
                <p>+91 9007062180</p>
              </div>
            </div>
          </div>
         <div className="flex space-x-4 mt-8">
            <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="#" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
        </div>

        </div>

      
        <div className="p-8">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Form; 