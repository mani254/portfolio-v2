import React, { useEffect, useRef, useContext } from "react";
import { about1, about2, about3, about4, about5, about6 } from "../../utils";
import gsap from "gsap";

import { MobileContext } from "../../App";

const projects = [
	{
		image: about1,
		title: "Miniflicks Private Theatre",
		link: "/projects/manikanta",
	},
	{
		image: about2,
		title: "Personal Portfolio",
		link: "/projects/manikanta",
	},
	{
		image: about3,
		title: "Dhruvika Academy",
		link: "/projects/manikanta",
	},
	{
		image: about4,
		title: "Sruthi Boutique",
		link: "/projects/manikanta",
	},
	{
		image: about5,
		title: "Sruthi Boutique",
		link: "/projects/manikanta",
	},
	{
		image: about6,
		title: "Sruthi Boutique",
		link: "/projects/manikanta",
	},
];

function MoreAbout() {
	const sectionRef = useRef(null);
	const secondChildRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current || !secondChildRef.current) return;

		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
		});
		tl1.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8, delay: 0.2 });

		tl1.fromTo(secondChildRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "power2.out", duration: 0.8, stagger: 0.15 });

		return () => {
			tl1.kill();
		};
	}, [sectionRef, secondChildRef]);

	return (
		<section className="about-section" ref={sectionRef}>
			<div className="about-part p-0 flex flex-col md:flex-row items-center justify-center ">
				<div className="md:max-h-96 w-full md:w-auto overflow-x-clip md:overflow-y-clip order-2 md:order-1">
					<ScrollingProjects />
				</div>
				<div className="space-y-5 about-part order-1 md:order-2" ref={secondChildRef}>
					<h2>Key Projects and OpenSource Contributions</h2>
					<p>I developed the editorify-dev npm package, a reusable UI component library, and I’m building a backend e-commerce platform similar to Shopify, offering seamless API integration. Additionally, I’ve worked on various individual client projects. See all projects below.</p>
					<button className="btn-1 w-full md:w-auto py-2">Sell all Projects</button>
				</div>
			</div>
		</section>
	);
}

function ScrollingProjects() {
	const firstChild = useRef(null);
	const secondChild = useRef(null);

	const isMobile = useContext(MobileContext);

	useEffect(() => {
		if (!firstChild.current || !secondChild.current) return;

		const firstAnimation = gsap.fromTo(
			firstChild.current,
			{ y: isMobile ? "0" : "15%", x: isMobile ? "0%" : "0" },
			{
				y: isMobile ? "0" : "-35%",
				x: isMobile ? "-30%" : "0%",
				scrollTrigger: {
					trigger: firstChild.current,
					start: "top 90%",
					end: "top 20%",
					scrub: 1,
				},
			}
		);

		const secondAnimation = gsap.fromTo(
			secondChild.current,
			{ y: isMobile ? "0" : "-45%", x: isMobile ? "-30%" : "0" },

			{
				y: isMobile ? "0" : "10%",
				x: isMobile ? "0%" : "0",
				scrollTrigger: {
					trigger: firstChild.current,
					start: "top 95%",
					end: "top 10%",
					scrub: 1,
				},
			}
		);

		return () => {
			firstAnimation.kill();
			secondAnimation.kill();
		};
	}, [firstChild, secondChild, isMobile]);

	return (
		<div className="flex flex-col md:flex-row gap-3 md:gap-5 px-4 md:px-6 lg:px-10 mt-3 md:mt-0">
			<div className="flex gap-3 md:gap-5 flex-row  translate-y-0 md:flex-col" ref={firstChild}>
				{projects.map((project, index) => {
					if (index > 2) return null;
					return (
						<div key={index} className="relative min-w-[39%] aspect-square md:min-w-44  bg-gray-200 rounded-xl overflow-hidden">
							<img className="absolute w-full h-full cover" src={project.image} alt={`${project.title} image`} />
							<p>{project.title}</p>
						</div>
					);
				})}
			</div>
			<div className="flex gap-3 md:gap-5 flex-row translate-y-0 md:flex-col " ref={secondChild}>
				{projects.map((project, index) => {
					if (index < 3) return null;
					return (
						<div key={index} className="relative min-w-[39%] aspect-square md:min-w-44 bg-gray-200 rounded-xl overflow-hidden">
							<img className="absolute w-full h-full cover" src={project.image} alt={`${project.title} image`} />
							<p>{project.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MoreAbout;
