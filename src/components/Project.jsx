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
        <div className="flex md:items-center gap-8 max-md:flex-col-reverse relative pb-8 hide duration-700 transition-[opacity,transform]">
            {showFullImage && <div className="fixed z-[1000] left-0 top-1/2 -translate-y-1/2 h-screen w-screen flex items-center justify-center bg-[#00000090]">
                {loading && <div className="loader">Loading...</div>}
                <img className="w-screen h-[80%] object-contain " src={image} onLoad={handleImageLoad} alt="" />
            </div>}
            <div className="md:basis-1/2 basis-full">
                <h2 className="max-md:hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8]">
                    Project {nm + 1}
                </h2>
                <div className="p-3">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl mt-4 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-300 max-w-md text-justify">
                        {desc}
                    </p>
                    <div className="flex items-center mt-3 gap-10">
                        {link && <a target="_blank" rel="noreferrer" href={link} className="flex gap-2 items-center cursor-pointer rounded-lg hover:bg-[#ffffff07] w-fit px-2 py-1 transition-colors duration-150">
                            <img className="h-10" src={github} alt="" />
                        </a>}
                        {live && <a target="_blank" rel="noreferrer" href={live} className="flex gap-2 items-center cursor-pointer  rounded-lg hover:bg-[#ffffff07] w-fit px-2 py-1 transition-colors duration-150">
                            <img className="h-10" src={arrow} alt="" />
                            <p className="font-semibold">Live View</p>
                        </a>}
                    </div>
                </div>
            </div>
            <div className="max-md:basis-full basis-1/2 ">
                <h2 className="md:hidden text-3xl lg:text-4xl xl:text-5xl font-bold text-[#32a6a8] w-full mb-10">
                    Project {nm + 1}
                </h2>
                <div onClick={handleClick} className="cursor-pointer max-w-xl mx-auto border-8 border-[#309092] image-shadow ">
                    <img className="translate-x-3 -translate-y-5 rounded-md  shadow-2xl shadow-black hover:scale-105" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;
