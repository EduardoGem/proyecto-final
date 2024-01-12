import React, { useState } from "react";

import { RiDashboardFill, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line, RiLogoutCircleRLine, RiMenu3Fill, RiCloseLine, RiNotification2Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

import { Link } from "react-router-dom"

function HeaderPrin() {
    return (
        <header className=" bg-zinc-900 gap-4 flex flex-col md:flex-row items-center justify-between p-4 w-full">
            <form className=" w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
                <div className="relative">
                    <RiSearch2Line className=" absolute left-2 top-3" />
                    <input type="text" className=" w-full py-2  pl-8 pr-4 rounded-lg p-2 outline-none bg-gray-200" placeholder="Buscar" />
                </div>
            </form>

            <nav className=" w-full md:w-[60%] lg:w-[70%] flex md:justify-end justify-center">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link to={"#"} className="relative">
                            <RiNotification2Line className=" text-xl text-gray-400" />
                            <RiCheckboxBlankCircleFill className=" text-xs text-red-500 absolute -right-1 -top-1" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"} className=" text-gray-400 flex items-center gap-1">
                            Eduardo Gemio Quisbert
                            <RiArrowDownSLine />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderPrin