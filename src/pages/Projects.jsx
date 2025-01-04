import React from "react";
import ProjectsList from "../components/Projects/ProjectsList";

function Projects() {
	return (
		<div className="container max-w-6xl">
			<div className="py-20">
				<p className="text-lg inline-block text-zinc-600 border-b border-zinc-600">My Projects</p>
				<h1 className="mt-10 text-xl md:text-2xl">Bringing ideas to life with clean, interactive, and user-friendly designs.</h1>
			</div>
			<ProjectsList />
		</div>
	);
}

export default Projects;
