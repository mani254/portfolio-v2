import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import { about1, about2, about3, about4, about5, about6, profile } from "../../utils";

function About() {
	const svgRef = useRef(null);
	const aboutRef = useRef(null);

	const buttonRef = useRef(null);
	const scrollingDivsRef = useRef(null);
	const aboutTextRef = useRef(null);
	const imageRef = useRef(null);
	const imageTextRef = useRef(null);

	// useEffect for the svg animation for the about section background
	useEffect(() => {
		if (!aboutRef.current || !svgRef.current) return;

		const path = svgRef.current.querySelector("path");

		const animation = gsap.fromTo(
			path,
			{ attr: { d: "M0 292.999V0C162.5 355.5 1351 373.5 1536 0.499171V292.001L0 292.999Z" } },
			{
				attr: { d: "M0 301V0C794 0.499171 846.5 0.499171 1536 0.499171V300.002L0 301Z" },
				scrollTrigger: {
					trigger: aboutRef.current,
					ease: "power4.out",
					start: "top bottom",
					end: "top 45%",
					scrub: 1.1,
					// markers: true,
				},
			}
		);

		return () => {
			animation.kill();
		};
	}, []);

	useEffect(() => {
		if (!aboutRef.current || !imageRef.current || !imageTextRef.current || !buttonRef.current || !aboutTextRef.current) return;

		const splitText = new SplitType(aboutTextRef.current, { types: "words" });

		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: aboutRef.current,
				start: "top 80%",
				end: "top 40%",
				scrub: 1.5,
			},
		});

		tl1.fromTo([imageRef.current, imageTextRef.current, aboutTextRef.current], { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.2 });

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: scrollingDivsRef.current,
				start: "top 80%",
				end: "bottom bottom",
				scrub: 2,
			},
		});

		tl2.fromTo(splitText.words, { x: 5, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.05, ease: "power3.out", duration: 1 }).fromTo(buttonRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, ease: "power2.in", duration: 0.4 }, "-=0.6");

		return () => {
			tl1.kill();
			tl2.kill();
		};
	}, [aboutRef, imageRef, imageTextRef, buttonRef, aboutTextRef]);

	useEffect(() => {
		if (!aboutRef.current || !scrollingDivsRef.current) return;

		let pinStatus = true;
		if (window.innerHeight > 800) {
			pinStatus = false;
		}

		const tl1 = gsap.fromTo(
			scrollingDivsRef.current,
			{ y: 300 },
			{
				y: 0,
				scrollTrigger: {
					trigger: aboutRef.current,
					start: "top 60%",
					end: "top top",
					scrub: true,
					// markers: true,
				},
			}
		);

		const children = Array.from(scrollingDivsRef.current.children);
		const topValues = [-290, -220, 30, 120, "72%", "87%"];
		const tl2 = gsap.to(children, {
			top: (index) => topValues[index] || 0,
			scrollTrigger: {
				trigger: aboutRef.current,
				start: "top -3px",
				end: "+=700",
				scrub: true,
				pin: pinStatus,
				pinSpacing: true,
				// onEnter: () => {
				// 	console.log("animation started");
				// },
				// onLeave: () => {
				// 	console.log("animation ended");
				// },
			},
		});

		// const handleResize = () => {
		// 	ScrollTrigger.refresh();
		// };

		// window.addEventListener("resize", handleResize);

		return () => {
			tl1.kill();
			tl2.kill();
			// window.removeEventListener("resize", handleResize);
		};
	}, [aboutRef, scrollingDivsRef]);

	return (
		<section className="relative w-full" ref={aboutRef}>
			<div className="min-h-[700px] flex flex-col w-full">
				<svg width="100%" height="100%" viewBox="0 0 1533 302" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef}>
					<path className="fill-gray-950" d="M0 292.999V0C162.5 355.5 1351 373.5 1536 0.499171V292.001L0 292.999Z" />
				</svg>
				<div className="about-bg bg-gray-950 w-full h-full flex-1 -mt-1"></div>
			</div>
			<div className="scrolling-divs absolute w-full h-full top-0 right-0 overflow-hidden" ref={scrollingDivsRef}>
				<div className="w-[160px] bg-lavendar-gray bg-opacity-30 absolute left-[10%] top-[10%] shadow-gray-400 shadow-md rounded-xl overflow-hidden">
					<img className="opacity-80" src={about1} alt="web development and design images" />
				</div>
				<div className="w-[180px] bg-lavendar-gray bg-opacity-30 absolute right-[5%] top-[45%] shadow-gray-400 shadow-md rounded-xl overflow-hidden">
					<img className="opacity-80" src={about2} alt="web development and design images" />
				</div>
				<div className="w-[190px] bg-lavendar-gray bg-opacity-30 absolute left-[6%] top-[80%] shadow-gray-400 shadow-md rounded-xl overflow-hidden">
					<img className="opacity-80" src={about3} alt="web development and design images" />
				</div>
				<div className="w-[150px] bg-lavendar-gray bg-opacity-30 absolute right-[10%] top-[130%] shadow-gray-400 shadow-md rounded-xl overflow-hidden">
					<img className="opacity-80" src={about4} alt="web development and design images" />
				</div>
				<div className="w-[150px] bg-lavendar-gray bg-opacity-30 absolute left-[10%] top-[175%] shadow-gray-400 shadow-md rounded-xl overflow-hidden">
					<img className="opacity-80" src={about5} alt="web development and design images" />
				</div>
				<div className="w-[165px] bg-lavendar-gray bg-opacity-30 absolute right-[7%] top-[200%] shadow-gray-400 shadow-md rounded-xl overflow-hidden">
					<img className="opacity-80" src={about6} alt="web development and design images" />
				</div>
			</div>
			<div className="container w-[100%] h-full  absolute left-1/2 top-0 -translate-x-[50%] flex flex-col items-center justify-center gap-10">
				<div>
					<div className="w-20 h-20 rounded-full overflow-hidden bg-dark bg-opacity-45" ref={imageRef}>
						<img src={profile} alt="dev mani profile image" />
					</div>
					<p className="text-center mt-2 text-sm" ref={imageTextRef}>
						About Me
					</p>
				</div>
				<p ref={aboutTextRef} className="text-lg text-center max-w-[700px] font-medium" data-text="I’m Sai Manikanta, a passionate web developer and designer with 3 years of project experience and 1 year in professional experience. I specialize in building responsive, user-friendly websites, e-commerce platforms, and software applications. Open to new opportunities and collaborations.">
					I’m Sai Manikanta, a passionate web developer and designer with 3 years of project experience and 1 year in professional experience. I specialize in building responsive, user-friendly websites, e-commerce platforms, and software applications. Open to new opportunities and collaborations.
				</p>
				<button className="btn btn-1 py-2" ref={buttonRef}>
					Know More
				</button>
			</div>
		</section>
	);
}

export default About;
