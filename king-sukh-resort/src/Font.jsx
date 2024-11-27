
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from "./Components/Img/ayodhya.webp";

const Font = ({ click }) => {
    console.log(click);
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 100,
            once: true
        });
    }, []);

    return (
        <div id='home'
            className="flex flex-col items-center justify-center min-h-screen pt-20"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            {click && (
                <div>
                    <p
                        className="text-center font-sans text-xl text-gray-900"
                        data-aos="zoom-in-up"
                    >
                        Simple-Unique-Friendly
                    </p>
                    <h1
                        className="text-center text-3xl font-bold text-blue-600 "
                        data-aos="zoom-in-up"
                    >
                        Make Yourself At Home In Our <span className="text-red-500">Guest House</span>
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Font;




