import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const Service = ({ title, icon, desc, id }) => {
  const [startAnimation,setStartAnimation]=useState(true)
  const [position,SetPosition]=useState({x:0,y:0})
  const cardRef=useRef(null)
  const handleMouseEnter=()=>{
    console.log("hi")
    setStartAnimation(true)
  }
  const handleMouseleave=()=>{
    setStartAnimation(false)
  }
  const handleMouseMove=(e)=>{
    const rect=cardRef.current.getBoundingClientRect()
    const posX=((rect.height/2)-(e.clientY-rect.top))
    const posY=((rect.width/2)-(e.clientX-rect.left))
    const resX=((posX*10)/(rect.height/2))
    const resY=((posY*10)/(rect.width/2))
    SetPosition({x:resX,y:resY})

  }
  
  return (
    <div style={{perspective:"1000px"}} >
      <div ref={cardRef} style={{transformStyle:"preserve-3d",transform:startAnimation ? `rotateY(${-position.y}deg) rotateX(${position.x}deg)`:"none"}}
      className={`group relative w-full max-w-xs hide  ${
        id == 1 ? "lg:-translate-y-6" : ""
      }`}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave} onMouseMove={handleMouseMove}
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500" />

      <div className="relative glass-card rounded-2xl px-6 py-10 text-white flex items-center justify-between space-y-6 flex-col min-h-[380px] hover:border-[#40dcdf50] transition-all duration-500">
        {/* Icon container */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#40dcdf] rounded-[30px] rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="relative w-20 h-20 p-4 bg-gradient-to-br from-[#0c3131] to-[#103c3d] rounded-[24px] rotate-45 flex items-center justify-center border border-[#30909240] group-hover:border-[#40dcdf60] transition-all duration-300">
            <img
              className="w-12 -rotate-45 group-hover:scale-110 transition-transform duration-300"
              src={icon}
              alt={title}
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-[#40dcdf] group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {desc}
          </p>
        </div>

        {/* Bottom accent */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#309092] to-[#40dcdf] rounded-full opacity-50 group-hover:w-20 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
    </div>
  );
};

export default Service;
