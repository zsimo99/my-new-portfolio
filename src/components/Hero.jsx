import { useEffect, useState } from "react"
import heroBg from "../assets/pexels-daniel-eliashevsky-6942359.jpg"

const text = ["I'm Mohamed", "I'm Zakaria", "We Are ZMT Agency"]

// eslint-disable-next-line react/prop-types
const Hero = ({ load }) => {
    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [counterN, setCounterN] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(prev => {
                if (prev === text[counterN].length) {
                    // setCounterN(counterN === 0 ? 1 : 0)
                    return 0
                }
                return prev + 1
            });
        }, 300);
        return () => clearTimeout(timer);
    }, [counter, counterN]);
    return (
        <section id="home" className="min-h-screen relative flex items-center">
            {/* Background */}
            <div className="w-full h-full absolute z-10 top-0 left-0">
                <img className="h-full w-full object-cover object-center" src={heroBg} alt="heroBg" />
                <div className="bg-gradient-to-br from-[#000000cc] via-[#02151680] to-[#02151660] absolute top-0 left-0 w-full h-full" />
            </div>
            
            {/* Floating decoration elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#309092] rounded-full filter blur-[120px] opacity-20 z-10" />
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#40dcdf] rounded-full filter blur-[150px] opacity-10 z-10" />
            
            {/* Hero Content */}
            <div className={`container mx-auto px-6 lg:px-12 relative z-20 transition-all duration-1000 ${load ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}>
                <div className="flex gap-8 items-start">
                    {/* Decorative line */}
                    <div className="relative w-1.5 h-32 md:h-44 bg-gradient-to-b from-[#40dcdf] via-[#309092] to-transparent rounded-full hidden sm:block">
                        <div className="w-5 h-5 bg-[#40dcdf] -translate-x-[7px] rounded-full absolute top-0 left-1/2 shadow-lg shadow-[#40dcdf50]" />
                    </div>
                    
                    {/* Text content */}
                    <div className="space-y-6">
                        <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide uppercase">Welcome to my portfolio</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                            Hi, <span className="gradient-text">{text[counterN].slice(0, counter)}</span>
                            <span className="ml-1 w-[3px] inline-block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-[#40dcdf] animateHero rounded-full"></span>
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 leading-relaxed">
                            I develop <span className="text-[#40dcdf]">3D visuals</span>, user<br className="hidden sm:block" /> 
                            interfaces and <span className="text-[#309092]">web applications</span>
                            <span className="inline-block w-2.5 h-2.5 ml-2 bg-[#40dcdf] rounded-sm animate-pulse" />
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            <a href="#portfolio" className="btn-glow px-8 py-3 bg-gradient-to-r from-[#309092] to-[#40dcdf] text-white font-semibold rounded-lg shadow-lg shadow-[#30909040]">
                                View My Work
                            </a>
                            <a href="#contact" className="px-8 py-3 border-2 border-[#309092] text-[#40dcdf] font-semibold rounded-lg hover:bg-[#30909220] transition-all duration-300">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <a href="#aboutUs" className="absolute bottom-10 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce cursor-pointer hover:text-[#40dcdf] transition-colors">
                <span className="text-gray-400 text-sm tracking-widest">SCROLL</span>
                <div className="w-6 h-10 rounded-full border-2 border-[#309092] flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-[#40dcdf] rounded-full animate-pulse" />
                </div>
            </a>
            
            <svg
                className="curve"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
        </section>
    )
}

export default Hero