import arrow from "../assets/arrow-right.svg";
import github from "../assets/github.png";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "./Slider";

const Project = ({
  nm,
  project: { title, link, desc, live, image, images ,tech},
}) => {
  const [showSlider, setSHowSlider] = useState(false);
  const [loading, setLoading] = useState(false);

  const sliderRef = useRef(null);
  const handleClick = (e) => {
    e.stopPropagation();
    setSHowSlider(true);
    setLoading(true);
  };

  useEffect(() => {
    if (!showSlider) return;
    const handleOutside = (e) => {
      if (sliderRef.current && !sliderRef.current.contains(e.target)) {
        setSHowSlider(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [showSlider]);

  return (
    <div className="group flex md:items-center gap-10 lg:gap-16 max-md:flex-col-reverse relative pb-10 hide duration-700 transition-all">
      {/* Fullscreen image modal */}
      {showSlider && (
        <div
        //   className="fixed z-[1000] inset-0 flex items-center justify-center bg-b backdrop-blur-sm p-4"
        >
          {/* {loading && <div className="loader text-white">Loading...</div>} */}
          {/* <img className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" src={image} onLoad={handleImageLoad} alt={title} />*/}
          {/* <button className="absolute z-50 top-6 right-6 text-white text-4xl hover:text-[#40dcdf] transition-colors" onClick={() => setSHowSlider(false)}>&times;</button>  */}
          <div className="w-screen h-screen bg-black/50 fixed z-[100] px-6 top-0 left-0 flex items-center justify-center">
            <div onLoad={()=>setLoading(false)} ref={sliderRef} className="flex-1 relative py-14 md:px-12 w-full  mx-auto max-w-4xl flex-grow bg-gradient-to-br h-3/4 from-[#114446]/90 to-[#032324]/90 shadow-2xl rounded-3xl shadow-[#0C5759]/50" ><Slider images={images} /></div>
          </div> 
        </div>
      )}

      {/* Project info */}
      <div className="md:basis-1/2 basis-full space-y-4">
        <span className="hidden md:inline-block text-[#6dd5d7] text-sm font-semibold tracking-widest uppercase">
          Project {String(nm + 1).padStart(2, "0")}
        </span>
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:text-[#40dcdf] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
          {desc}
        </p>
        <div className="flex gap-4 flex-wrap">
            {tech.map((t,i)=><span className="text-sm block px-4 py-0.5 bg-gradient-to-l from-[#3FD9DC]/50 to-[#319496]/50 rounded-xl">{t}</span>)}
        </div>
        <div className="flex items-center gap-6 pt-4">
          {link && (
            <a
              target="_blank"
              rel="noreferrer"
              href={link}
              className="flex gap-3 items-center px-4 py-2 rounded-lg border border-[#30909240] hover:border-[#40dcdf] hover:bg-[#40dcdf10] transition-all duration-300 group/link"
            >
              <img
                className="h-8 opacity-80 group-hover/link:opacity-100 transition-opacity"
                src={github}
                alt="GitHub"
              />
              <span className="text-gray-400 group-hover/link:text-[#40dcdf] font-medium transition-colors">
                Code
              </span>
            </a>
          )}
          {live && (
            <a
              target="_blank"
              rel="noreferrer"
              href={live}
              className="flex gap-3 items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#309092] to-[#40dcdf] hover:shadow-lg hover:shadow-[#30909040] transition-all duration-300 group/live"
            >
              <img className="h-6 brightness-0 invert" src={arrow} alt="" />
              <span className="text-white font-semibold">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Project image */}
      <div className="max-md:w-full md:basis-1/2">
        <span className="md:hidden inline-block text-[#6dd5d7] text-sm font-semibold tracking-widest uppercase mb-4">
          Project {String(nm + 1).padStart(2, "0")}
        </span>
        <div
          onClick={handleClick}
          className="cursor-pointer relative group/img"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-xl opacity-30 group-hover/img:opacity-50 blur transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-lg border-2 border-[#30909260] group-hover/img:border-[#40dcdf] transition-colors duration-300">
            <img
              className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
              src={image}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02151680] to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white text-sm font-medium">
                Click to view more images
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
