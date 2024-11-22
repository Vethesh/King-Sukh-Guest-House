import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import small from './img/small.jpg';
import large from './img/large.jpg';
import palash from './img/palash.webp';
import out from './img/out.jpg';
import one from './Img/1.jpg';
import baranti from './Img/baranti.webp'
import dam from './Img/mithonDam.webp'


function Gallery() {

  const images = [small, large, palash, out, one, baranti, dam];
  
  // const images = [
  //   "./img/small.jpg",
  //   "./img/large.jpg",
  //   "./img/palash.webp",
  //   "./img/out.jpg",
  //   "./img/ayodhya.webp"
  // ];
  // console.log(images);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl font-bold py-4">GALLARY------</h1>
      <div className="max-w-4xl mx-auto mt-8">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="rounded-lg w-full h-80 object-cover shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
