import React from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full h-96 object-cover"
          alt="Adventure 1"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">
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
          className="w-full h-96 object-cover"
          alt="Adventure 2"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">
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
          className="w-full h-96 object-cover"
          alt="Adventure 3"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">
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
          className="w-full h-96 object-cover"
          alt="Adventure 4"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <p className="text-white text-2xl font-bold">
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
