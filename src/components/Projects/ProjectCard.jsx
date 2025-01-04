import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function ProjectCard({ title, description, link, image, index }) {
	const imageRef = useRef(null);
	const cardRef = useRef(null);

	useEffect(() => {
		if (!cardRef.current || !imageRef.current) return;

		const imageAnimation = gsap.to(imageRef.current, {
			y: 80,
			scrollTrigger: {
				trigger: imageRef.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
			ease: "sine.out",
		});

		const cardAnimation = gsap.to(cardRef.current, {
			y: -120,
			scrollTrigger: {
				trigger: cardRef.current,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
			ease: "sine.out",
		});

		return () => {
			imageAnimation.kill();
			cardAnimation.kill();
		};
	}, [cardRef, imageRef]);

	return (
		<div ref={cardRef} className="shadow-lg overflow-hidden rounded-xl">
			<div className="relative h-[300px] overflow-hidden bg-gray-500  text-cursor" data-text="View Project">
				<img ref={imageRef} src={image} alt="Project" className="w-full h-full scale-150 object-cover object-center" />
			</div>
			<div className="p-4 py-6">
				<h2 className="mb-2">{title}</h2>
				<p className="">{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
