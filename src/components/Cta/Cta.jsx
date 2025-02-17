import React, { useRef, useEffect, useState, useContext } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import black from "../../assets/3d-dark-shape.png";
import { AppContext } from "../../App";
import { throttle } from "lodash"; // Import throttle

const socialLinks = [
	{ title: "Instagram", link: "https://instagram.com" },
	{ title: "LinkedIn", link: "https://linkedin.com" },
	{ title: "X (Twitter)", link: "https://twitter.com" },
	{ title: "GitHub", link: "https://github.com" },
];

const Cta = () => {
	const [hovered, setHovered] = useState(null);
	const marqueeRefs = useRef({});
	const sectionRef = useRef(null);
	const { options, setOptions } = useContext(AppContext);

	useEffect(() => {
		if (hovered) {
			const marquee = marqueeRefs.current[hovered];
			if (!marquee) return;

			marquee.innerHTML += marquee.innerHTML;

			gsap.to(marquee, {
				x: "-100%",
				duration: 10,
				ease: "linear",
				repeat: -1,
			});
		}
		return () => {
			gsap.killTweensOf(marqueeRefs.current[hovered]);
		};
	}, [hovered]);

	useEffect(() => {
		const handleScroll = throttle(() => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				const isScrolledPast = rect.top <= 10;

				if (isScrolledPast && !options.isNavDark) {
					setOptions((prev) => ({ ...prev, isNavDark: true }));
					console.log("true");
				} else if (!isScrolledPast && options.isNavDark) {
					setOptions((prev) => ({ ...prev, isNavDark: false }));
					console.log("false");
				}
			}
		}, 300); // Throttling to fire every 200ms

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [options, setOptions]);

	return (
		<div className="bg-gray-950 py-10" ref={sectionRef}>
			<h3 className="text-xs uppercase tracking-wider text-gray-400 mb-10 px-5 sm:px-10 md:px-20">Social Media and Contacts</h3>

			{socialLinks.map((item, index) => (
				<a key={index} className="block" href={item.link} target="_blank">
					<div className="relative flex justify-between items-center border-b border-gray-600 py-4 overflow-hidden px-5 sm:px-10 md:px-20" onMouseEnter={() => setHovered(item.title)} onMouseLeave={() => setHovered(null)}>
						<a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 relative">
							{item.title}
						</a>

						<p className="text-gray-400 text-lg">↗</p>

						{/* Animated marquee only when hovered */}
						{hovered === item.title && (
							<div className="absolute inset-0 show-box flex items-center z-10">
								<div ref={(el) => (marqueeRefs.current[item.title] = el)} className="whitespace-nowrap flex gap-10 text-sm text-gray-800 w-full">
									{Array(10)
										.fill(item.title)
										.map((text, i) => (
											<span key={i} className="uppercase">
												{text} <span className="text-gray-800">↗</span>
											</span>
										))}
								</div>
							</div>
						)}
					</div>
				</a>
			))}

			<div className="">
				<div className="flex items-center justify-center flex-col py-24 sm:py-38 md:py-44 gap-20 relative overflow-hidden">
					<h1 className="text-gray-300 relative z-10 text-center"> Have an Idea?</h1>
					<NavLink to="/contact" className="inline-block move-over relative z-10">
						<button type="submit" className="w-full md:w-[300px] flex-list-button border-gray-300">
							<span className=" px-5 py-5 md:px-8 md:py-8 inline-block text-gray-300 uppercase text-lg">Tell Us</span>
						</button>
					</NavLink>
					<div className="absolute h-full opacity-50 ">
						<img src={black} alt="3d black shape image" className="h-full" />
					</div>
					<div className="absolute w-full h-full radial-black"></div>
				</div>
			</div>
		</div>
	);
};

export default Cta;
