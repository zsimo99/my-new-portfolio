import { Link } from "react-router-dom";
import logo from "../assets/logo2.svg"
const sections = [
    { id: "home", label: "Home" },
    { id: "aboutUs", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];
// test 

// eslint-disable-next-line react/prop-types
const Header = ({ activeSection, show, setShow }) => {

    return (
        <header className="top-0 duration-500 transition-[top] left-0 fixed w-full z-[999] text-white bg-[#44444440] shadow-xl p-3 flex items-center">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className=" flex gap-1 items-center cursor-pointer">
                    <img className="w-11  rounded-full border-[#309092] border-2 p-1" src={logo} alt="" />
                    <p className="text-xl  font-black"><span className="text-[#309092]">Mohamed</span> Zoraa</p>
                </Link>
                <ul className={`flex gap-5 text-lg md:text-xl  text-gray-200 font-semibold max-lg:fixed max-lg:flex-col max-lg:bg-[#44444430]  max-lg:w-[180px] top-0 max-lg:h-screen transition-[right] duration-300 max-lg:text-center max-lg:pt-14 ${!show ? "right-[-180px]" : " right-0"}`}>
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                className={`linkItem ${activeSection === section.id && "active"}`}
                                href={`#${section.id}`}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setShow(prev => !prev)} className={`lg:hidden absolute transition-[justify-content] duration-300 top-1/2 -translate-y-1/2 right-4 z-10 w-7 h-6 flex flex-col ${show ? "justify-center" : "justify-between"}`}>
                    <span className={`w-full transition-[rotate,transform] duration-300 h-1 bg-white ${show && "translate-y-full rotate-45"}`}></span>
                    <span className={`w-full transition-[opacity] duration-100 h-1 bg-white ${show && "opacity-0"}`}></span>
                    <span className={`w-full transition-[rotate,transform] duration-300 h-1 bg-white ${show && "-translate-y-full -rotate-45"}`}></span>
                </button>
            </div>
        </header>
    )
}

export default Header