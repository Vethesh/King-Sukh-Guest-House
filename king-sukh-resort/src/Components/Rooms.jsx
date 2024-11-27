// src/Rooms.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Large from "./Img/large.jpg"; 
import Small from "./Img/small.jpg"; 

const rooms = [
  {
    title: 'Cozy Haven Room',
    description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
    price: 1000,
    imageUrl: Large
  },
  {
    title: 'Spacious Serenity Suite',
    description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
    price: 1500,
    imageUrl: Small
  }
];

const RoomCard = ({ title, description, price, imageUrl }) => {

  useEffect(() => {
    AOS.init({
      duration: 1200,  
      offset: 200,      
      once: true        
    });
  }, []);

  const phoneNumber = "+919007062180"; // Replace with the desired phone number

  const handleBookNowClick = () => {
    const message = `Hello! I would like to book the ${title} for Rs. ${price}/night.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      id="rooms"
      className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 w-72"
      data-aos="fade-up"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-lg font-bold text-gray-800 mt-4">
          Starting from Rs. {price}/night
        </p>
        <button
          className="bg-pink-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-pink-600 transition duration-200"
          onClick={handleBookNowClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
const Rooms = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-8 px-4">
          <header className="mb-10">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">OUR LIVING ROOM------- </h2>
        <h1 className="text-3xl font-bold text-gray-800">The Most Memorable Rest Time Starts Here.</h1>
      </header>
      <div className="flex flex-wrap justify-center gap-6">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            title={room.title}
            description={room.description}
            price={room.price}
            imageUrl={room.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
