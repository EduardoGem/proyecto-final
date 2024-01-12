import React, { useState } from "react";

import { RiDashboardFill, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line, RiLogoutCircleRLine, RiMenu3Fill, RiCloseLine, RiNotification2Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

import { Link } from "react-router-dom"

function SidebarFinal() {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
    setSidebar(!sidebar);
    }

    return (
        <div className={`fixed w-[79%] md:w-[40%] lg:w-full lg:static  top-0 z-50 bg-zinc-900 transition-all  ${sidebar ? "-left-0" : "-left-full"
            }  w-full h-full overflow-y-auto  py-8 px-2 border-r`}>
            <div className=" text-center p-8">
                <img src="logoprin.png"/>
            </div>
            <div className="  flex flex-col justify-between h-[700px]">
                <nav>
                    <ul>
                        <li>
                            <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-[#2f7544] p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                <RiDashboardFill />
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-[#2f7544] p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                <RiBriefcaseLine />
                                Registros
                            </Link>
                        </li>
                        <li>
                            <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-[#2f7544] p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                <RiCalendar2Line />
                                Cuaderno Pedagógico
                            </Link>
                        </li>
                        <li>
                            <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-[#2f7544] p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                <RiMessage2Line />
                                Kardex Académico
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col  gap-4">
                    <img src="imagensidebar.svg" alt="Image" />

                    <Link to={"#"} className="flex items-center gap-4 text-gray-400 hover:bg-[#2f7544] p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                        <RiLogoutCircleRLine />
                        Salir
                    </Link>
                </div>
            </div>

            <button
                onClick={handleSidebar} className=" block lg:hidden absolute bottom-4 right-4 bg-[#2f7544] p-2 text-white rounded-full text-2xl"
            >
                {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
            
        </div>

        
    )
}
export default SidebarFinal