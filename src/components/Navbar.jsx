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

		const isMobilePath = "circle(130vh at 100% 0px)";
		const desktopPath = "circle(140vw at 100% 0px)";
		const closedPath = "circle(0px at 100% 0px)";

		// Initialize the timeline
		const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.8 } });

		if (menuActive) {
			tl.to(menuRef.current, { clipPath: isMobile ? isMobilePath : desktopPath })
				.fromTo(fadeInUp1.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "-=0.3")
				.fromTo(fadeInUp2.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "-=0.6")
				.fromTo(fadeInUp3.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "-=0.9");
		} else {
			tl.to([...fadeInUp3.current], { y: 30, autoAlpha: 0, stagger: 0.02 })
				.to([...fadeInUp2.current], { y: 30, autoAlpha: 0, stagger: 0.02 }, "<")
				.to([...fadeInUp1.current], { y: 30, autoAlpha: 0, stagger: 0.02 }, "<")
				.to(menuRef.current, { clipPath: closedPath }, "-=0.4");
		}

		return () => {
			tl.kill();
		};
	}, [menuActive, isMobile]);

	useEffect(() => {
		const menuElement = menuRef.current;

		if (!menuElement) return;

		const handleClick = () => {
			setMenuActive(false);
		};

		menuElement.addEventListener("click", handleClick);

		return () => {
			if (menuElement) {
				// Ensure it still exists before removing
				menuElement.removeEventListener("click", handleClick);
			}
		};
	}, [menuActive]);

	return (
		<nav className="container flex items-center justify-between pt-2 sticky top-0 z-40">
			<div className="logo  h-[55px] p-2 glass-effect rounded-md relative z-30 px-3">
				<NavLink to="/" className="flex gap-2 items-center">
					<img src={logoSvg} className="w-[55px]" alt="Manidev-developer-logo" />
					<div>
						<p className="font-bold text-md leading-5">Mani</p>
						<p className="tracking-widest text-xs leading-5">Developer</p>
					</div>
				</NavLink>
			</div>

			<ul className="hidden md:flex items-center gap-8 glass-effect py-2 px-6 rounded-full font-semibold ml-[100px] relative z-2">
				<li className="hover-link">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="hover-link">
					<NavLink to="/about">About</NavLink>
				</li>
				<li className="hover-link">
					<NavLink to="/services">Services</NavLink>
				</li>
				<li className="hover-link">
					<NavLink to="/projects">Projects</NavLink>
				</li>
				{/* <li>
					<NavLink to="/blogs">Blogs</NavLink>
				</li> */}
			</ul>

			<div className="flex gap-5 glass-effect rounded-full py-1 px-6 relative z-[20]">
				<NavLink to="/contact" className="hidden sm:block">
					<button className="btn-1">Contact</button>
				</NavLink>
				<button className={`hover-link group hamburger w-9 h-8 flex justify-evenly flex-col items-end relative ${menuActive && "active"}`} onClick={toggleMenu}>
					<span className="w-full h-1 rounded bg-dark block absolute transition-all duration-200 -translate-y-[5px]"></span>
					<span className="h-1 rounded bg-dark block w-[75%] absolute transition-all duration-200 translate-y-[5px]"></span>
				</button>
			</div>

			<div ref={menuRef} className={`mobile-menu w-full h-screen inset-0 flex items-center justify-center big-menu fixed z-10 bg-white`}>
				<div className="flex gap-12 sm:gap-28">
					<div className="flex flex-col justify-between">
						<div className="text-md font-semibold" ref={(el) => (fadeInUp1.current[0] = el)}>
							Mail
						</div>
						<p className="text-sm font-medium pb-5 hover-link cursor-pointer inline-block" ref={(el) => (fadeInUp1.current[1] = el)}>
							<a href="mailto:manifreelancer25@gmail.com">Send a Mail</a>
						</p>
						<div className="text-md font-semibold" ref={(el) => (fadeInUp2.current[0] = el)}>
							Contact
						</div>
						<div ref={(el) => (fadeInUp2.current[1] = el)}>
							<a href="https://github.com/mani254" target="_blank">
								<p className="text-sm font-medium  has-c-over inline-block">Github</p>
							</a>
						</div>
						<div ref={(el) => (fadeInUp2.current[2] = el)}>
							<a href="https://www.linkedin.com/in/sai0421/" target="_blank">
								<p className="text-sm font-medium  has-c-over inline-block">Linkedin</p>
							</a>
						</div>
						<div ref={(el) => (fadeInUp2.current[3] = el)}>
							<a href="https://www.instagram.com/code_addict21/" target="_blank">
								<p className="text-sm font-medium  has-c-over inline-block">Instagram</p>
							</a>
						</div>
						<div ref={(el) => (fadeInUp2.current[4] = el)}>
							<a href="https://www.youtube.com/channel/UCCdkYdNdJYuyQx_ky5GTvYg" target="_blank">
								<p className="text-sm font-medium  has-c-over inline-block">Youtube</p>
							</a>
						</div>
						<div ref={(el) => (fadeInUp2.current[5] = el)}>
							<a href="https://wa.me/+918688014415" target="_blank">
								<p className="text-sm font-medium  has-c-over inline-block">Whatsapp</p>
							</a>
						</div>
						{/* <div ref={(el) => (fadeInUp2.current[6] = el)}>
							<p className="text-sm font-medium  has-c-over inline-block">Telegram</p>
						</div> */}
						{/* <div ref={(el) => (fadeInUp2.current[7] = el)}>
							<p className="text-sm font-medium  has-c-over inline-block">Twitter</p>
						</div> */}
					</div>
					<ul className="space-y-7">
						<li className="text-sm" ref={(el) => (fadeInUp3.current[0] = el)}>
							<NavLink to="/">
								<h2 className="has-c-over  sm:font-xl md:font-semibold text-2xl">Home</h2>
							</NavLink>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[1] = el)}>
							<NavLink to="/about">
								<h2 className="has-c-over sm:font-xl md:font-semibold text-2xl">About</h2>
							</NavLink>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[2] = el)}>
							<NavLink to="/services">
								<h2 className="has-c-over sm:font-xl md:font-semibold text-2xl">Services</h2>
							</NavLink>
						</li>
						<li className="text-sm" ref={(el) => (fadeInUp3.current[3] = el)}>
							<NavLink to="/projects">
								<h2 className="has-c-over sm:font-xl md:font-semibold text-2xl">Projects</h2>
							</NavLink>
						</li>
						{/* <li className="text-sm" ref={(el) => (fadeInUp3.current[4] = el)}>
							<h2 className="has-c-over">Blogs</h2>
						</li> */}
						<li className="text-sm" ref={(el) => (fadeInUp3.current[6] = el)}>
							<NavLink to="/contact">
								<h2 className="has-c-over sm:font-xl md:font-semibold text-2xl">Contact</h2>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
