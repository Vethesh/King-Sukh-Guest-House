// const About = () => {
//     return (
//         <div>

//         </div>
//     );
// }

// export default About


import guestHouseImage from "./Img/out.jpg"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,  
            offset: 200,      
            once: true        
        });
    }, []);
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-50 min-h-screen">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4 " data-aos="fade-right">
                <img 
                    src={guestHouseImage} 
                    alt="Guest House" 
                    className="w-full h-70 rounded-lg shadow-md"/>
            </div>
            
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                <h2 className="text-sm font-semibold text-gray-600 mb-2">ABOUT US------- </h2>
                <h1 className="text-4xl font-bold text-gray-900 mb-4"  data-aos="fade-up">
                    The Best Holidays Start Here!
                </h1>
                <p className="text-gray-600 mb-6"  data-aos="fade-up">
                    Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchet Dam. 
                    Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
                </p>
                <p className="text-blue-800 font-bold mb-2"  data-aos="fade-up">
                    Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                </p>
                <p className="text-blue-800 font-bold mb-6"  data-aos="fade-up">
                    Contact us: +91 9007062180
                </p>
                <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-200"  data-aos="fade-up">
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
