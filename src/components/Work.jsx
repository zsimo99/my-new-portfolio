import { useState } from "react"
import Projects from "./Projects"

// eslint-disable-next-line react/prop-types
const Work = ({ setLoad }) => {
    const [service, setService] = useState("wa")

    return (
        <section id="portfolio" className="py-24 md:py-32 lg:py-40 bg-[#032324] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-[#309092] rounded-full filter blur-[180px] opacity-15" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#40dcdf] rounded-full filter blur-[200px] opacity-10" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-4 hide duration-700 transition-all mb-12">
                    <span className="text-[#40dcdf] text-sm md:text-base font-semibold tracking-widest uppercase">My recent work</span>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold gradient-text">Portfolio</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-full mx-auto" />
                </div>
                
                {/* Category tabs */}
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-10 hide duration-700 transition-all">
                    <li 
                        className={`services cursor-pointer ${service === "wa" ? "before:w-full text-[#40dcdf]" : ""}`} 
                        onClick={() => setService("wa")}
                    >
                        Web Application
                    </li>
                    <li 
                        className={`services cursor-pointer ${service === "ui" ? "before:w-full text-[#40dcdf]" : ""}`} 
                        onClick={() => setService("ui")}
                    >
                        UI/UX Design
                    </li>
                </ul>
            </div>
            
            <Projects setLoad={setLoad} service={service} showAll={false} />
        </section>
    )
}

export default Work