import React, { useEffect, useRef, useContext } from "react";
import { about1, about2, about3, about4, about5, about6 } from "../../utils";
import gsap from "gsap";

import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

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
				start: "top 85%",
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
				<NavLink to="/projects">
					<div className="md:max-h-96 w-full md:w-auto overflow-x-clip md:overflow-y-clip order-2 md:order-1">
						<ScrollingProjects />
					</div>
				</NavLink>
				<div className="space-y-5 about-part order-1 md:order-2" ref={secondChildRef}>
					<h2>Key Projects and OpenSource Contributions</h2>
					<p aria-label="Explore my contributions, including the Editorify-Dev npm package and a Shopify-like e-commerce backend platform. I’ve also delivered tailored solutions to individual clients, ensuring their digital success.">Explore my contributions, including the Editorify-Dev npm package and a Shopify-like e-commerce backend platform. I’ve also delivered tailored solutions to individual clients, ensuring their digital success.</p>

					<div className="flex items-center  gap-5">
						<NavLink to="/projects" className="inline-block move-over">
							<button className="w-full md:w-auto flex-list-button">
								<span>See all Projects</span>
							</button>
						</NavLink>

						<a href="/saimanikanta.pdf" target="_blank" downlaod>
							<button class="download move-over">
								<svg class="saveicon" stroke="rgb(220, 220, 220)" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" stroke-linejoin="round" stroke-linecap="round"></path>
								</svg>
								Resume
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

function ScrollingProjects() {
	const firstChild = useRef(null);
	const secondChild = useRef(null);

	const { options } = useContext(AppContext);
	const { isMobile } = options;

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
		<div className="flex flex-col md:flex-row gap-3 md:gap-5 px-4 md:px-6 lg:px-10 mt-3 md:mt-0 text-cursor" data-text="View Projects">
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
