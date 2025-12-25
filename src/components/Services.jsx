import { services } from "../constants"
import Service from "./Service"

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 lg:py-40 bg-[#0A4F51] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#40dcdf] rounded-full filter blur-[250px] opacity-10" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-4 hide duration-700 transition-all">
                    <span className="text-[#6dd5d7] text-sm md:text-base font-semibold tracking-widest uppercase">What I offer</span>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold gradient-text">My Services</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Specialized skills to bring your digital vision to life</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-full mx-auto" />
                </div>
                <div className="flex flex-wrap gap-8 lg:gap-12 justify-center items-stretch mt-16">
                    {services.map((service, id) => <Service key={id} id={id} {...service} />)}
                </div>
            </div>
            <svg
                className="slant"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon points="0,100 100,0 100,100" />
            </svg>
        </section>
    )
}

export default Services