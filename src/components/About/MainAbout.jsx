import React, { useEffect, useRef } from "react";
import { hi, profile } from "../../utils";
import gsap from "gsap";
import SplitType from "split-type";

function MainAbout() {
	const aboutBoxRef = useRef(null);
	const imageBoxRef = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		// Ensure refs exist
		if (!aboutBoxRef.current || !imageBoxRef.current || !imageRef.current) return;

		const imageTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: imageBoxRef.current,
				start: "top 90%",
				toggleActions: "play none none reverse",
			},
			defaults: { delay: 0.3 },
		});

		imageTimeline.fromTo(imageBoxRef.current, { opacity: 0.1, y: 70 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.8 }).fromTo(imageRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, ease: "power3.out", duration: 1 }, "-=0.5");

		const aboutTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: aboutBoxRef.current,
				start: "top 90%",
				toggleActions: "play none none reverse",
			},
			defaults: { delay: 0.3 },
		});

		const firstChild = aboutBoxRef.current.children[0];
		const secondChild = aboutBoxRef.current.children[1];

		aboutTimeline.fromTo(aboutBoxRef.current, { opacity: 0.1, y: 70 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 });

		aboutTimeline.fromTo(firstChild, { opacity: 0.1, y: 30 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5 });

		const h2 = secondChild.querySelector("h2");
		const p = secondChild.querySelector("p");

		let splitText = null;
		let splitPara = null;
		if (h2) {
			splitText = new SplitType(h2, { types: "words", tagName: "span" });
			aboutTimeline.fromTo(splitText.words, { x: 20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.02, ease: "power2.out", duration: 1 }, "-=0.8");
		}

		if (p) {
			splitPara = new SplitType(p, { types: "words", tagName: "span" });
			aboutTimeline.fromTo(splitPara.words, { x: 20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.02, ease: "power2.out", duration: 1 }, "-=0.8");
		}

		return () => {
			aboutTimeline.kill();
			imageTimeline.kill();
		};
	}, [aboutBoxRef, imageBoxRef, imageRef]);

	return (
		<section className="about-section flex flex-col lg:flex-row gap-6 md:gap-8 lg-gap-10">
			<div className="about-part w-full lg:w-[40%] relative order-2 min-h-72" ref={imageBoxRef}>
				<img ref={imageRef} className="absolute object-contain object-center w-full h-full top-0 left-0" src={profile} alt="Manikanta profile image" />
			</div>
			<div className="about-part w-full lg:w-[60%] order-1" ref={aboutBoxRef}>
				<div className="flex items-center gap-2">
					<img className="w-12" src={hi} alt="Hand Wave Hi png image" />
					<h2 className="text-opacity-50">Hi</h2>
				</div>
				<div className="space-y-3 mt-3">
					<h2 aria-label="I am Manikanta, Designing impactful Solutions for Over 2 Years.">I am Manikanta, Designing impactful Solutions for Over 2 Years</h2>
					<p aria-label="I’m a developer and freelancer specializing in crafting user-focused websites and applications. My expertise lies in building modern, scalable, and impactful solutions that elevate businesses. Let’s work together to transform ideas into reality and create something exceptional.">
						I’m a developer and freelancer specializing in crafting user-focused websites and applications. My expertise lies in building modern, scalable, and impactful solutions that elevate businesses. Let’s work together to transform ideas into reality and create something exceptional.
					</p>
				</div>
			</div>
		</section>
	);
}

export default MainAbout;
