import React, { useEffect } from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Banner = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true, // Animation happens once
    });
  }, []);

  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-1000 ease-in-out hover:scale-110"
          alt="Adventure 1"
          data-aos="fade-up" // AOS fade-up animation
          data-aos-duration="1500" // Duration for fade-up animation
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          data-aos="zoom-in" // AOS zoom-in effect for overlay text
          data-aos-duration="1200"
        >
          <p className="text-white text-2xl font-bold px-6 md:px-12">
            "Support Local Winter Adventures"
          </p>
        </div>
        {/* Navigation */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-1000 ease-in-out hover:scale-110"
          alt="Adventure 2"
          data-aos="fade-up" // AOS fade-up animation
          data-aos-duration="1500"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <p className="text-white text-2xl font-bold px-6 md:px-12">
            "Discover Local Markets This Season"
          </p>
        </div>
        {/* Navigation */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-1000 ease-in-out hover:scale-110"
          alt="Adventure 3"
          data-aos="fade-up" // AOS fade-up animation
          data-aos-duration="1500"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <p className="text-white text-2xl font-bold px-6 md:px-12">
            "Celebrate Community Events Together"
          </p>
        </div>
        {/* Navigation */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full h-[500px] md:h-[600px] object-cover transition-all duration-1000 ease-in-out hover:scale-110"
          alt="Adventure 4"
          data-aos="fade-up" // AOS fade-up animation
          data-aos-duration="1500"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <p className="text-white text-2xl font-bold px-6 md:px-12">
            "Spread Warmth This Winter Season"
          </p>
        </div>
        {/* Navigation */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
