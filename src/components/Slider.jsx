// Slider.jsx
import { useEffect, useState } from "react";

const Slider = ({
  images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYgNcCyqt7eW3Hc88Kl7os9yIKhSOCoZWXgW_PQ7tTc9_Kn9z",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOq1yzf7PVc7OEXX8YvBaCt4PHzsQA6-M9wscwoW6MqfvkiheT",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyUG0eX19ZX2tjsYuBdosmf_-5ovjLQB_H9AFF_3neX7fOd1S3",
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [loading,setLoading]=useState(false)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Image */}
      <div className="w-full h-full overflow-hidden flex items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full max-h-full rounded-xl bg-transparent object-contain  "
        />
      </div>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute bottom-14 md:top-1/2 left-2  transform md:-translate-y-1/2 bg-[#309092] bg-opacity-50 text-white  flex w-10 h-10 justify-center items-center rounded-2xl"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute bottom-14 md:top-1/2 right-2 transform md:-translate-y-1/2 bg-[#309092] bg-opacity-50 text-white flex w-10 h-10 justify-center items-center rounded-2xl"
      >
        &#10095;
      </button>

      {/* Dots / Indexes */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#309092]" : "bg-gray-100"
            }`}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Slider;


