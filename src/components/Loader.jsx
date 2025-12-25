// eslint-disable-next-line react/prop-types
const Loader = ({ loader, logo, load }) => {
    return (
        <div
            ref={loader}
            className={`fixed top-0 left-0 z-[9999] h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#021516] via-[#032324] to-[#021516] transition-all duration-700 ${!load ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#309092] rounded-full filter blur-[150px] opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#40dcdf] rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="relative flex flex-col items-center gap-8">
                {/* Logo with glow */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#40dcdf] rounded-full filter blur-3xl opacity-30 animate-pulse" />
                    <img className="relative w-28 md:w-36 rounded-full border-2 border-[#40dcdf50] p-3" src={logo} alt="Logo" />
                </div>
                
                {/* Spinner */}
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
                
                {/* Loading text */}
                <p className="text-[#6dd5d7] text-sm tracking-widest uppercase animate-pulse">Loading...</p>
            </div>
        </div>
    )
}

export default Loader