import React, { useRef, useEffect } from "react";
import ProjectsList from "../components/Projects/ProjectsList";
import SplitType from "split-type";
import gsap from "gsap";

function Projects() {
	const subTitleRef = useRef(null);
	const headingRef = useRef(null);
	const listRef = useRef(null);
	const wrapperRef = useRef(null);

	useEffect(() => {
		const wrapperAnim = gsap.to(wrapperRef.current, {
			y: -100,
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "top 20%",
				end: "bottom top",
				scrub: true,
			},
			ease: "sine.out",
		});

		const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

		timeline.fromTo(subTitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" });

		const splitHeading = new SplitType(headingRef.current, { types: "lines" });
		timeline.fromTo(splitHeading.lines, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.3, duration: 0.6, ease: "power2.inOut" }, "-=0.5");

		timeline.fromTo(listRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, "-=0.3");

		return () => {
			timeline.kill();
			wrapperAnim.kill();
		};
	}, []);

	return (
		<div className="container max-w-6xl">
			<div className="py-20" ref={wrapperRef}>
				<p ref={subTitleRef} className="text-lg inline-block text-zinc-600 border-b border-zinc-600">
					My Projects
				</p>
				<h1 ref={headingRef} className="mt-10 text-xl md:text-2xl" aria-label="Bringing ideas to life with clean, interactive, and user-friendly designs.">
					Bringing ideas to life with clean, interactive, and user-friendly designs.
				</h1>
			</div>
			<div ref={listRef}>
				<ProjectsList />
			</div>
		</div>
	);
}

export default Projects;
