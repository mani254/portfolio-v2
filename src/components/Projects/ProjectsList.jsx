import React from "react";
import projects from "../../utils/ProjectsArray";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-x-14 xl:gap-x-20 mt-[100px] sm:mt-[200px]">
			{projects.map((project, index) => (
				<div key={index} className={`${index % 2 == 0 ? "md:-mt-32" : ""} hover:scale-[0.98] transition-transform duration-200 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]`}>
					<ProjectCard title={project.title} description={project.description} image={project.image} index={index} />
				</div>
			))}
		</div>
	);
}

export default ProjectsList;
