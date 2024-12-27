import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import { logoSvg } from "../utils";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

import { AppContext } from "../App";

function Navbar() {
	const [menuActive, setMenuActive] = useState(false);

	const menuRef = useRef(null);
	const fadeInUp1 = useRef([]);
	const fadeInUp2 = useRef([]);
	const fadeInUp3 = useRef([]);

	const { options } = useContext(AppContext);
	const { isMobile } = options;

	const toggleMenu = useCallback(() => {
		setMenuActive((prev) => !prev);
	}, []);

	useEffect(() => {
		if (!menuRef.current) return;

		const isMobilePath = "circle(100vh at 100% 0px)";
		const desktopPath = "circle(120vw at 100% 0px)";
		const closedPath = "circle(0px at 100% 0px)";

		// Initialize the timeline
		const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.8 } });

		if (menuActive) {
			tl.to(menuRef.current, { clipPath: isMobile ? isMobilePath : desktopPath })
				.fromTo(fadeInUp1.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "-=0.3")
				.fromTo(fadeInUp2.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "-=0.6")
				.fromTo(fadeInUp3.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "-=0.9");
		} else {
			tl.to([...fadeInUp3.current], { y: 30, autoAlpha: 0, stagger: 0.05 })
				.to([...fadeInUp2.current], { y: 30, autoAlpha: 0, stagger: 0.05 }, "<")
				.to([...fadeInUp1.current], { y: 30, autoAlpha: 0, stagger: 0.05 }, "<")
				.to(menuRef.current, { clipPath: closedPath }, "-=0.3");
		}

		return () => {
			tl.kill();
		};
	}, [menuActive, isMobile]);

	return (
		<nav className="container flex items-center justify-between pt-2 sticky top-0 z-40">
			<div className="logo w-[60px] h-[60px] p-2 glass-effect rounded-full relative z-20">
				<NavLink>
					<img className="" src={logoSvg} alt="Manidev-developer-logo" />
				</NavLink>
			</div>

			<ul className="hidden md:flex items-center gap-5 glass-effect py-2 px-6 rounded-full font-semibold ml-[100px] relative z-20">
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

			<div className="flex gap-5 glass-effect rounded-full py-1 px-6 relative z-[20]">
				<button className="btn-1">Contact</button>
				<button className={`group hamburger w-9 h-8 flex justify-evenly flex-col items-end relative ${menuActive && "active"}`} onClick={toggleMenu}>
					<span className="w-full h-1 rounded bg-dark block absolute transition-all duration-200 -translate-y-[5px]"></span>
					<span className="h-1 rounded bg-dark block w-[75%] absolute transition-all duration-200 translate-y-[5px]"></span>
				</button>
			</div>

			<div ref={menuRef} className={`mobile-menu w-full h-screen inset-0 flex items-center justify-center big-menu fixed z-10 bg-white `}>
				<div className="flex gap-10 sm:gap-20">
					<div className="flex flex-col justify-between">
						<div className="text-xs font-semibold" ref={(el) => (fadeInUp1.current[0] = el)}>
							Mail
						</div>
						<p className="text-xs pb-5 cursor-pointer" ref={(el) => (fadeInUp1.current[1] = el)}>
							info@devmani.in{" "}
						</p>
						<div className="text-xs font-semibold" ref={(el) => (fadeInUp2.current[0] = el)}>
							Contact
						</div>
						<div ref={(el) => (fadeInUp2.current[1] = el)}>
							<p className="text-xs  has-c-over">Github</p>
						</div>
						<div ref={(el) => (fadeInUp2.current[2] = el)}>
							<p className="text-xs  has-c-over">Linkedin</p>
						</div>
						<div ref={(el) => (fadeInUp2.current[3] = el)}>
							<p className="text-xs  has-c-over">Instagram</p>
						</div>
						<div ref={(el) => (fadeInUp2.current[4] = el)}>
							<p className="text-xs  has-c-over">Youtube</p>
						</div>
						<div ref={(el) => (fadeInUp2.current[5] = el)}>
							<p className="text-xs  has-c-over">Whatsapp</p>
						</div>
						<div ref={(el) => (fadeInUp2.current[6] = el)}>
							<p className="text-xs  has-c-over">Telegram</p>
						</div>
						<div ref={(el) => (fadeInUp2.current[7] = el)}>
							<p className="text-xs  has-c-over">Twitter</p>
						</div>
					</div>
					<ul className="space-y-6">
						<li className="text-sm" ref={(el) => (fadeInUp3.current[0] = el)}>
							<h2 className="has-c-over">Home</h2>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[1] = el)}>
							<h2 className="has-c-over">Services</h2>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[2] = el)}>
							<h2 className="has-c-over">Projects</h2>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[3] = el)}>
							<h2 className="has-c-over">Blogs</h2>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[4] = el)}>
							<h2 className="has-c-over">Contact</h2>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
