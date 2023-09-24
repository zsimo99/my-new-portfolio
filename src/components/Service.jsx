
// eslint-disable-next-line react/prop-types
const Service = ({ title, icon, desc, id }) => {
    return (
        <div className={`max-w-xs bg-[#103c3d] px-5 py-14 text-white flex items-center justify-between space-y-3 flex-col  hide duration-700 transition-[opacity,transform] min-h-[350px] ${id === 1 && "xl:-translate-y-10"}`}>
            <div className="w-24 p-4 bg-[#0c3131] rounded-[40px] rotate-45">
                <img className="w-20 -rotate-45" src={icon} alt="" />
            </div>
            <p className="text-2xl font-bold">{title}</p>
            <p className="mt-4 max-sm:text-[13px] max-sm:leading-5 text-center text-gray-400">{desc}</p>
        </div>
    )
}

export default Service