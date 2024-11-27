import React from "react";

const Footer = () => {

      const handleBookNowClick = () => {
        const phoneNumber = "+919007062180";
        const message = `Hello! I would like to book flat.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(url, "_blank");
      };
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kingsukh Guest House Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Kingsukh Guest House</h2>
          <p className="text-gray-400">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            onClick={handleBookNowClick}>
            BOOK NOW
          </button>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Browse Destinations</li>
            <li>Special Offers & Packages</li>
            <li>Room Types & Amenities</li>
            <li>Customer Reviews & Ratings</li>
            <li>Travel Tips & Guides</li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </p>
          <p className="text-gray-400 mt-2">Email: kkghosh0099@gmail.com</p>
          <p className="text-gray-400 mt-2">Phone: +91 9007062180</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
