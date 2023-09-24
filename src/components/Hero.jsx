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
        <section id="home" className='h-[100vh] relative'>
            <div className="w-full h-full absolute z-10 top-0 left-0">
                <img className="h-[100vh] w-full object-cover object-center" src={heroBg} alt="heroBg" />
                <div className="bg-[#00000080] absolute top-0 left-0 w-full h-full" />
            </div>
            <div className={`text-white absolute z-20 top-1/2 -translate-y-1/2 left-10 lg:left-1/2 flex gap-6 duration-700 delay-300 transition-[opacity,transform] ${load && "opacity-0 translate-y-4 translate-x-4 "}`}>
                <div className="relative w-2 h-28 md:h-40 bg-gradient-to-b from-[#309092] to-transparent">
                    <div className="w-8 h-8 bg-[#309092] -translate-x-1/2 rounded-full absolute top-0 left-1/2" />
                </div>
                <div >
                    <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Hi,&nbsp;<span className="text-[#309092]">{text[counterN].slice(0, counter)}</span>  <span className="-translate-x-1 md:-translate-x-2 lg:-translate-x-3 translate-y-1 w-px inline-block h-6 sm:h-8 md:h-10 lg:h-12 bg-white animateHero"></span></p>
                    <p className="mt-4 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">I develop 3D visuals, user <br />interfaces and web applications <span className="w-2 h-2 inline-block bg-[#309092]" /></p>
                </div>
            </div>
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