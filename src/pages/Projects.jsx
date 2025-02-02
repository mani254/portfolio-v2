import React, { useRef, useEffect } from "react";
import ProjectsList from "../components/Projects/ProjectsList";
import gsap from "gsap";
import BreadCrumb from "../components/Utils/BreadCrumb";

function Projects() {
	const listRef = useRef(null);

	useEffect(() => {
		const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

		timeline.fromTo(listRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, "+=1");

		return () => {
			timeline.kill();
		};
	}, []);

	return (
		<div className="container max-w-6xl">
			<BreadCrumb title="Bringing ideas to life with clean, interactive, and user friendly designs." subtitle="My Projects" />
			<div ref={listRef}>
				<ProjectsList />
			</div>
		</div>
	);
}

export default Projects;
