import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../utils/ProjectsArray";

gsap.registerPlugin(ScrollTrigger);

const ProjectListing = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const sections = containerRef.current.querySelectorAll(".project-item");
		sections.forEach((section, index) => {
			gsap.fromTo(
				section,
				{ opacity: 0, y: 100, scale: 0.9 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none none",
					},
				}
			);
		});
	}, []);

	return (
		<div ref={containerRef} className="relative w-full py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
			<div className="mx-auto px-6">
				{/* <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 relative z-10">Featured Projects</h2> */}
				<div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div key={index} className="project-item relative group rounded-3xl shadow-xl bg-white p-5 transform transition-all duration-500 hover:scale-105">
							<div className="relative overflow-hidden rounded-2xl shadow-md">
								<img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-2xl group-hover:scale-110 transition-all duration-500" />
							</div>
							<div className="mt-6 text-center">
								<h5 className="text-md font-semibold text-gray-800">{project.title}</h5>
								<p className="text-gray-600 mt-2">{project.description}</p>
								<a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded-full shadow-md transition-transform duration-300 hover:bg-blue-600 hover:-translate-y-1">
									View Project
								</a>
							</div>
							<div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
							<div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectListing;
