import React from "react";
import projects from "../../utils/ProjectsArray";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-x-14 xl:gap-x-20  sm:mt-[200px] ">
			{projects.map((project, index) => (
				<div key={index} className={`${index % 2 == 0 ? "sm:-mt-32" : ""}`}>
					<ProjectCard title={project.title} description={project.description} image={project.image} link={project.link} index={index} />
				</div>
			))}
		</div>
	);
}

export default ProjectsList;
