import React, { useState } from "react";
import { logoSvg } from "../utils";

import { NavLink } from "react-router-dom";

function Navbar() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<nav className="container flex items-center justify-between pt-2 sticky top-0 z-10">
			<div className="logo w-[60px] h-[60px] p-2 glass-effect rounded-full">
				<NavLink>
					<img className="" src={logoSvg} alt="Manidev-developer-logo" />
				</NavLink>
			</div>

			<ul className="hidden md:flex items-center gap-5 glass-effect py-2 px-6 rounded-full font-semibold ml-[80px] ">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/services">Services</NavLink>
				</li>
				<li>
					<NavLink to="/services">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/blogs">Blogs</NavLink>
				</li>
			</ul>

			<div className="flex gap-5 glass-effect rounded-full py-1 px-6">
				<button className="btn-1">Contact</button>
				<button className={`group hamburger w-9 h-8 flex justify-evenly flex-col items-end relative  ${menuActive && "active"}`} onClick={() => setMenuActive(!menuActive)}>
					<span className="w-full h-1 rounded bg-dark block absolute transition-all duration-200 -translate-y-[5px]"></span>
					<span className="h-1 rounded bg-dark block w-[75%] absolute transition-all duration-200 translate-y-[5px]"></span>
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
