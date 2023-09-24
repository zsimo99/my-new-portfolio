import { useSearchParams, useNavigate } from "react-router-dom"
import logo from "../assets/logo2.svg"
import Projects from "../components/Projects";


// eslint-disable-next-line react/prop-types
const Works = ({ load, setLoad }) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const service = searchParams.get("srv")
    const goToHome = () => {
        setLoad(true)
        navigate("/")
    }

    return (
        <div className="bg-[#032324] text-white py-24 overflow-hidden">
            <header className="top-0 duration-500 transition-[top] left-0 fixed w-full z-[999] text-white bg-[#44444440] shadow-xl p-3 h-[70px] flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <button onClick={goToHome} className=" flex gap-1 items-end cursor-pointer">
                        <img className="w-11 rounded-full border-[#309092] border-2 p-1" src={logo} alt="" />
                        <p className="text-xl font-black"><span className="text-[#309092]">Mohamed</span> Zoraa</p>
                    </button>
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