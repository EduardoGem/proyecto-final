import React, { useState } from "react";

import { RiDashboardFill, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line, RiLogoutCircleRLine, RiMenu3Fill, RiCloseLine, RiNotification2Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

import { Link } from "react-router-dom"

function SidebarPrin() {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
            {/*Sidebar*/}

            <div className={`fixed w-[79%] md:w-[40%] lg:w-full lg:static  top-0 z-50 bg-white transition-all  ${sidebar ? "-left-0" : "-left-full"
                }  w-full h-full overflow-y-auto  col-span-1 p-8 `}>
                <div className=" text-center p-8">
                    <h1 className=" uppercase font-bold tracking-[4px]">Tu Logo</h1>
                </div>
                <div className="  flex flex-col justify-between h-[780px]">
                    <nav>
                        <ul>
                            <li>
                                <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-purple-600 p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                    <RiDashboardFill />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-purple-600 p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                    <RiBriefcaseLine />
                                    Job Board
                                </Link>
                            </li>
                            <li>
                                <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-purple-600 p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                    <RiCalendar2Line />
                                    Shedule
                                </Link>
                            </li>
                            <li>
                                <Link to={'H'} className="flex items-center gap-4 text-gray-400 hover:bg-purple-600 p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                                    <RiMessage2Line />
                                    Messenger
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-col  gap-4">
                        <img src="imagenejem.svg" alt="Image" />

                        <div className=" bg-purple-100 p-8 flex flex-col gap-4 rounded-3xl">
                            <h3 className=" text-xl text-center">Get Upgrade</h3>
                            <p className=" text-gray-500 text-center">Lorem, ipsum dolor sit amet consectetur </p>
                            <button className=" bg-purple-600 text-white p-2 rounded-lg">Learn More</button>
                        </div>

                        <Link to={"#"} className="flex items-center gap-4 text-gray-400 hover:bg-purple-600 p-4 hover:text-white rounded-lg 
                            transition-colors font-semibold">
                            <RiLogoutCircleRLine />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>

            {/*Btn Movil*/}

            <button
                onClick={handleSidebar} className=" block lg:hidden absolute bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl"
            >
                {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
            
            {/* Contenido */}
           <div className=" col-span-5 bg-purple-300">
                {/*Header */}
                <header className=" bg-red-300 gap-4 flex flex-col md:flex-row items-center justify-between p-4 w-full">
                    {/*Search */}
                    <form className=" w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
                        <div className="relative">
                            <RiSearch2Line className=" absolute left-2 top-3" />
                            <input type="text" className=" w-full py-2 pl-8 pr-4 rounded-lg p-2 outline-none bg-gray-100" placeholder="Buscar" />
                        </div>
                    </form>
                    {/*Notification */}
                    <nav className=" w-full md:w-[60%] lg:w-[70%] flex md:justify-end justify-center">
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link to={"#"} className="relative">
                                    <RiNotification2Line className=" text-xl" />
                                    <RiCheckboxBlankCircleFill className=" text-xs text-red-500 absolute -right-1 -top-1" />
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"} className="flex items-center gap-1">
                                    Eduardo Gemio Quisbert
                                    <RiArrowDownSLine />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}
export default SidebarPrin
