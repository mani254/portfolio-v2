import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cta1() {
	const sectionRef = useRef(null);
	const svgRef1 = useRef(null);
	const svgRef2 = useRef(null);

	useEffect(() => {
		// Parallax effect on scroll
		gsap.to(sectionRef.current, {
			y: -50,
			opacity: 1,
			duration: 1.5,
			ease: "power2.out",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 80%",
				end: "top 30%",
				scrub: 1,
			},
		});

		// SVG Path Animations (Stroke Drawing)
		[svgRef1.current, svgRef2.current].forEach((svg) => {
			const paths = svg.querySelectorAll("path");

			paths.forEach((path) => {
				const length = path.getTotalLength();
				gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

				gsap.to(path, {
					strokeDashoffset: 0,
					duration: 2,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 90%",
						end: "bottom 60%",
						scrub: 1,
					},
				});
			});
		});
	}, []);

	return (
		<div ref={sectionRef} className=" min-h-[500px] md:min-h-[600px] flex items-center justify-center mb-10 opacity-0 overflow-hidden">
			<div className="container w-full sm:max-w-[400px] flex items-center justify-center flex-col">
				<h2 className="spl-text text-center">Let’s collaborate! Available for freelance work and exciting opportunities.</h2>

				<div className="flex gap-5 mt-2">
					<div>
						<svg ref={svgRef1} xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="none">
							<path d="M78.3976 2C71.9513 16.7773 50.931 50.48 10.8521 66.8129C32.1527 64.2204 69.9894 39.073 78.3976 2Z" stroke="#397C6F" strokeWidth="2" />
							<path d="M1.60308 67.3314C1.60308 67.3314 24.0249 49.1838 24.0249 49.7023C24.5854 53.8503 7.76911 67.3314 7.76911 67.3314C12.814 68.1091 13.9351 68.8293 27.1079 70.1832C31.3119 71.2202 27.9487 72.0471 27.1079 71.9979C19.7274 71.5658 3.95737 71.3239 2.16362 70.7017C0.369884 70.0795 1.04254 68.1956 1.60308 67.3314Z" stroke="#397C6F" strokeWidth="2" />
						</svg>
					</div>

					<div className="mt-6">
						<svg ref={svgRef2} xmlns="http://www.w3.org/2000/svg" width="80" height="76" viewBox="0 0 80 76" fill="none">
							<path d="M1.60241 2C8.04866 16.7773 29.069 50.48 69.1479 66.8129C47.8473 64.2204 10.0106 39.073 1.60241 2Z" stroke="#397C6F" strokeWidth="2" />
							<path d="M78.3969 67.3314C78.3969 67.3314 55.9751 49.1838 55.9751 49.7023C55.4146 53.8503 72.2309 67.3314 72.2309 67.3314C67.186 68.1091 66.0649 68.8293 52.8921 70.1832C48.6881 71.2202 52.0513 72.0471 52.8921 71.9979C60.2726 71.5658 76.0426 71.3239 77.8364 70.7017C79.6301 70.0795 78.9575 68.1956 78.3969 67.3314Z" stroke="#397C6F" strokeWidth="2" />
						</svg>
					</div>
				</div>

				<div className="flex items-center justify-between  gap-5 sm:gap-20 mt-4">
					<NavLink to="/contact" className="block move-over relative z-10">
						<button type="submit" className="w-[140px] md:w-[160px] flex-list-button less-width border-gray-300 -mt-10">
							<span className="py-3 inline-block text-xs sm:text-sm">Let's Connect</span>
						</button>
					</NavLink>
					<div className="space-y-3">
						<a href="mailto:msmanikanta25@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm block text-center hover-link ">
							msmanikanta25@gmail.com
						</a>
						<a href="tel:+918688014415" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm block text-center hover-link">
							+91 8688014415
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cta1;
