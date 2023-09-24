
// eslint-disable-next-line react/prop-types
const Loader = ({ loader, logo, load }) => {
    return (
        <div ref={loader} className={`fixed duration-500 transition-transform left-0 w-screen h-screen bg-[#032324] z-[2000] text-6xl flex flex-col items-center justify-center ${!load && "-translate-y-[150%]"}`}>
            <div className="w-full h-2/5">
                <img className="h-full w-full object-contain" src={logo} alt="logo" />
            </div>
            <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>
    )
}

export default Loader