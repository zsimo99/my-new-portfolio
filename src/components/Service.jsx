
// eslint-disable-next-line react/prop-types
const Service = ({ title, icon, desc, id }) => {
    return (
        <div className={`group relative w-full max-w-xs hide duration-700 transition-all ${id === 1 ? "lg:-translate-y-6" : ""}`}>
            {/* Hover glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500" />
            
            <div className="relative glass-card rounded-2xl px-6 py-10 text-white flex items-center justify-between space-y-6 flex-col min-h-[380px] hover:border-[#40dcdf50] transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon container */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#40dcdf] rounded-[30px] rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative w-20 h-20 p-4 bg-gradient-to-br from-[#0c3131] to-[#103c3d] rounded-[24px] rotate-45 flex items-center justify-center border border-[#30909240] group-hover:border-[#40dcdf60] transition-all duration-300">
                        <img className="w-12 -rotate-45 group-hover:scale-110 transition-transform duration-300" src={icon} alt={title} />
                    </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#40dcdf] group-hover:text-white transition-colors duration-300">{title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{desc}</p>
                </div>
                
                {/* Bottom accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-full opacity-50 group-hover:w-20 group-hover:opacity-100 transition-all duration-300" />
            </div>
        </div>
    )
}

export default Service