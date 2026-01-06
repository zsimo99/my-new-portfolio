import { Link } from "react-router-dom";
const sections = [
    { id: "home", label: "Home" },
    { id: "aboutMe", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];
// test 

// eslint-disable-next-line react/prop-types
const Header = ({ activeSection, show, setShow }) => {

    return (
        <header className="top-0 duration-500 transition-all left-0 fixed w-full z-[999] text-white backdrop-blur-md bg-[#02151680] border-b border-[#30909220] shadow-lg shadow-[#00000040] py-4 px-3 flex items-center">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex gap-3 items-center cursor-pointer group">
                    <img className="w-12 rounded-full border-[#309092] border-2 p-1 transition-all duration-300 group-hover:border-[#40dcdf] group-hover:scale-105" src="https://res.cloudinary.com/zscloud/image/upload/v1767701395/portfolio/logo2_szy2fr.svg" alt="" />
                    <p className="text-xl font-bold tracking-tight"><span className="gradient-text">Mohamed</span> Zoraa</p>
                </Link>
                <ul className={`flex gap-6 text-base lg:text-lg text-gray-200 font-medium max-lg:fixed max-lg:flex-col max-lg:backdrop-blur-xl max-lg:bg-[#02151695] max-lg:border-l max-lg:border-[#30909230] max-lg:w-[220px] top-0 max-lg:h-screen transition-all duration-400 ease-out max-lg:text-center max-lg:pt-20 max-lg:gap-2 ${!show ? "max-lg:right-[-220px]" : "max-lg:right-0 max-lg:shadow-2xl"}`}>
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
                <button onClick={() => setShow(prev => !prev)} className={`lg:hidden absolute transition-all duration-300 top-1/2 -translate-y-1/2 right-4 z-10 w-8 h-7 flex flex-col ${show ? "justify-center gap-0" : "justify-between"}`}>
                    <span className={`w-full transition-all duration-300 h-[3px] rounded-full bg-gradient-to-r from-[#309092] to-[#40dcdf] ${show && "translate-y-[1.5px] rotate-45"}`}></span>
                    <span className={`w-full transition-all duration-200 h-[3px] rounded-full bg-gradient-to-r from-[#309092] to-[#40dcdf] ${show && "opacity-0 scale-0"}`}></span>
                    <span className={`w-full transition-all duration-300 h-[3px] rounded-full bg-gradient-to-r from-[#309092] to-[#40dcdf] ${show && "-translate-y-[1.5px] -rotate-45"}`}></span>
                </button>
            </div>
        </header>
    )
}

export default Header