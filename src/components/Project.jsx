import arrow from "../assets/arrow-right.svg";
import github from "../assets/github.png";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line react/prop-types
const Project = ({ nm, project: { title, link, desc, live, image } }) => {
    const [showFullImage, setSHowFullImage] = useState(false)
    const [loading, setLoading] = useState(false);

    const mounted = useRef(false)
    const handleClick = () => {
        setLoading(true);
        mounted.current = true
        setSHowFullImage(true)
        setTimeout(() => {
            mounted.current = false
        }, 100);
    }
    const handleImageLoad = () => {
        setLoading(false);
    };
    useEffect(() => {
        document.addEventListener("click", () => {
            if (showFullImage && !mounted.current) {
                setSHowFullImage(false)
            }
        })
    }, [showFullImage])
    return (
        <div className="group flex md:items-center gap-10 lg:gap-16 max-md:flex-col-reverse relative pb-10 hide duration-700 transition-all">
            {/* Fullscreen image modal */}
            {showFullImage && (
                <div className="fixed z-[1000] inset-0 flex items-center justify-center bg-[#000000e0] backdrop-blur-sm p-4">
                    {loading && <div className="loader text-white">Loading...</div>}
                    <img className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" src={image} onLoad={handleImageLoad} alt={title} />
                    <button className="absolute top-6 right-6 text-white text-4xl hover:text-[#40dcdf] transition-colors" onClick={() => setSHowFullImage(false)}>&times;</button>
                </div>
            )}
            
            {/* Project info */}
            <div className="md:basis-1/2 basis-full space-y-4">
                <span className="hidden md:inline-block text-[#6dd5d7] text-sm font-semibold tracking-widest uppercase">Project {String(nm + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white group-hover:text-[#40dcdf] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                    {desc}
                </p>
                <div className="flex items-center gap-6 pt-4">
                    {link && (
                        <a target="_blank" rel="noreferrer" href={link} className="flex gap-3 items-center px-4 py-2 rounded-lg border border-[#30909240] hover:border-[#40dcdf] hover:bg-[#40dcdf10] transition-all duration-300 group/link">
                            <img className="h-8 opacity-80 group-hover/link:opacity-100 transition-opacity" src={github} alt="GitHub" />
                            <span className="text-gray-400 group-hover/link:text-[#40dcdf] font-medium transition-colors">Code</span>
                        </a>
                    )}
                    {live && (
                        <a target="_blank" rel="noreferrer" href={live} className="flex gap-3 items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#309092] to-[#40dcdf] hover:shadow-lg hover:shadow-[#30909040] transition-all duration-300 group/live">
                            <img className="h-6 brightness-0 invert" src={arrow} alt="" />
                            <span className="text-white font-semibold">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
            
            {/* Project image */}
            <div className="max-md:w-full md:basis-1/2">
                <span className="md:hidden inline-block text-[#6dd5d7] text-sm font-semibold tracking-widest uppercase mb-4">Project {String(nm + 1).padStart(2, '0')}</span>
                <div onClick={handleClick} className="cursor-pointer relative group/img">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-xl opacity-30 group-hover/img:opacity-50 blur transition-opacity duration-500" />
                    <div className="relative overflow-hidden rounded-lg border-2 border-[#30909260] group-hover/img:border-[#40dcdf] transition-colors duration-300">
                        <img className="w-full aspect-video object-cover object-top group-hover/img:scale-105 transition-transform duration-500" src={image} alt={title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02151680] to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white text-sm font-medium">Click to view full image</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
