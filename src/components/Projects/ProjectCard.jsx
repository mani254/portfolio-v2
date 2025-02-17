import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ title, description, link, image, index }) {
	const imageRefs = useRef([]);
	const cardRefs = useRef([]);

	useEffect(() => {
		if (!cardRefs.current[index] || !imageRefs.current[index]) return;

		const imageAnimation = gsap.to(imageRefs.current[index], {
			y: 120,
			scrollTrigger: {
				trigger: imageRefs.current[index],
				start: "top bottom",
				end: "bottom top",
				scrub: 0.5,
				// markers: true,
			},
			ease: "sine.in",
		});

		const cardAnimation = gsap.to(cardRefs.current[index], {
			y: -120,
			scrollTrigger: {
				trigger: cardRefs.current[index],
				start: "top bottom",
				end: "bottom top",
				scrub: 0.5,
				// markers: true,
			},
			ease: "sine.in",
		});

		return () => {
			imageAnimation.kill();
			cardAnimation.kill();
		};
	}, [index]); // Re-run only for this specific card

	console.log(link);
	return (
		<div ref={(el) => (cardRefs.current[index] = el)} className="overflow-hidden rounded-3xl shadow-xl bg-white p-3 md:p-6">
			<Link to={link} className="block" target="_blank">
				<div className="relative h-[270px] md:h-[320px] rounded-2xl shadow-md overflow-hidden text-cursor" data-text="View Project">
					<img ref={(el) => (imageRefs.current[index] = el)} src={image} alt="Project" className="w-full h-full object-cover object-center scale-[1.3]" />
				</div>
			</Link>
			<div className="py-6 px-2">
				<h2 className="mb-2">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
