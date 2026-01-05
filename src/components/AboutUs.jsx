import { useEffect } from "react";
// import image from "../assets/about_us 1.svg";
import video from "../assets/video/Video.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const AboutUs = () => {
  useEffect(() => {}, []);
  return (
    <section
      id="aboutMe"
      className="py-24 md:py-32 lg:py-40 bg-[#032324] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#309092] rounded-full filter blur-[200px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#40dcdf] rounded-full filter blur-[150px] opacity-10" />

      <div className="container mx-auto px-6 flex max-lg:flex-col-reverse gap-12 lg:gap-16 items-center relative z-10">
        <div className="lg:basis-1/2 flex justify-center">
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity duration-500" />
            <div className="relative border-4 border-[#309092] rounded-lg max-w-md xl:max-w-lg hide duration-700 transition-all overflow-hidden">
              <Video>
                <source src={video} type="video/mp4" />
              </Video>
            </div>
          </div>
        </div>
        <div className="lg:basis-1/2 space-y-6">
          <span className="text-[#40dcdf] text-sm md:text-base font-semibold tracking-widest uppercase hide duration-700 transition-all">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold gradient-text hide duration-700 transition-all">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-full hide duration-700 transition-all" />
          <p className="text-base md:text-lg xl:text-xl text-gray-300 leading-relaxed hide duration-700 transition-all">
            I’m a passionate full-stack web developer who enjoys building clean,
            responsive, and user-friendly applications. I work mainly with
            modern JavaScript technologies and focus on turning ideas into
            practical, well-designed solutions while continuously learning and
            improving my skills.{" "}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.fiverr.com/mohamedzoraa"
          className="btn-glow hide duration-700 transition-all px-8 py-3 md:px-12 md:py-4 block w-fit ms-auto rounded-lg text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#309092] to-[#40dcdf] shadow-lg shadow-[#30909030]"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
