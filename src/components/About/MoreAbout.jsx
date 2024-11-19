import React from "react";
import { about1, about2, about3, about4 } from "../../utils";
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
		image: about3,
		title: "Sruthi Boutique",
		link: "/projects/manikanta",
	},
	{
		image: about1,
		title: "Sruthi Boutique",
		link: "/projects/manikanta",
	},
];
function MoreAbout() {
	return (
		<section className="about-section">
			<div className="about-part p-0 flex flex-col md:flex-row items-center justify-center ">
				<div className="md:max-h-96 w-full md:w-auto overflow-x-clip md:overflow-y-clip order-2 md:order-1">
					<ScrollingProjects />
				</div>
				<div className="space-y-4 about-part order-1 md:order-2 ">
					<h2>I’ve been designing digital products for more than 15 years</h2>
					<p>Vitae enim ut interdum id mi sit id aliquam purus urna ipsum augue lorem est metus turpis tincidunt vitaeniolm siet sollicitudin sit aliquet nunc a enim commodo.</p>
					<button className="btn-1 w-full md:w-auto py-2">Sell all Projects</button>
				</div>
			</div>
		</section>
	);
}

function ScrollingProjects() {
	return (
		<div className="flex flex-col md:flex-row gap-3 md:gap-5 px-4 md:px-6 lg:px-10 mt-3 md:mt-0">
			<div className="flex gap-3 md:gap-5 flex-row -translate-x-[0%] translate-y-0 md:translate-x-0 md:flex-col  md:-translate-y-[23%] ">
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
			<div className="flex gap-3 md:gap-5 flex-row -translate-x-[10%] translate-y-0 md:flex-col md:translate-x-0  md:-translate-y-[15%] ">
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
