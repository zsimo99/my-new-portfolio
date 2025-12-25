import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import logo from "../assets/logo2.svg"
import Projects from "../components/Projects";


// eslint-disable-next-line react/prop-types
const Works = ({ load, setLoad }) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const service = searchParams.get("srv")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const goToHome = () => {
        // setLoad(true)
        // document.querySelector(".active").classList.remove("active")
        navigate("/")
    }

    return (
        <div className="bg-[#032324] text-white py-24 overflow-hidden min-h-screen">
            <header className="top-0 duration-500 transition-all left-0 fixed w-full z-[999] text-white backdrop-blur-md bg-[#02151680] border-b border-[#30909220] shadow-lg shadow-[#00000040] py-4 px-3 flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={goToHome} 
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#309092] to-[#40dcdf] hover:shadow-lg hover:shadow-[#30909040] transition-all duration-300 group"
                            aria-label="Go back"
                        >
                            <svg className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={goToHome} className="flex gap-3 items-center cursor-pointer group">
                            <img className="w-12 rounded-full border-[#309092] border-2 p-1 transition-all duration-300 group-hover:border-[#40dcdf]" src={logo} alt="" />
                            <p className="text-xl font-bold tracking-tight"><span className="gradient-text">Mohamed</span> Zoraa</p>
                        </button>
                    </div>
                </div>
            </header>
            <div className={`duration-700 delay-500 transition-[opacity,transform] ${load && "opacity-0 translate-y-4 translate-x-4 "}`}>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl mb-20 font-bold w-fit mx-auto text-[#298586] underline underline-offset-4">{service === "wa" && "Web Application"}{service === "ui" && "UI/UX Design"}</h1>
                <Projects service={service} showAll={true} />
            </div>
        </div>
    )
}

export default Works