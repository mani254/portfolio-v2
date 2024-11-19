import React from "react";
import { graduation, highSchool, ssc, webTechnologies } from "../../utils";
import { appDevelopment, webDevelopment, uiUxDesign, eCommerce } from "../../utils";

const educationDetails = [
	{
		image: webTechnologies,
		imageAlt: "Web Technologies icon representing continuous learning",
		course: "Web Technologies",
		duration: {
			from: 2019,
			to: "Present",
		},
		institution: "Self-guided Learning",
		percentage: "Proficient",
	},
	{
		image: graduation,
		imageAlt: "Bachelor's in Computer Science icon",
		course: "B.TECH - CSE",
		duration: {
			from: 2019,
			to: 2023,
		},
		institution: "Audisankara Institute of Technology",
		percentage: "79%",
	},
	{
		image: highSchool,
		imageAlt: "Pre-University in MPC icon",
		course: "Pre-University in MPC",
		duration: {
			from: 2017,
			to: 2019,
		},
		institution: "Krishna Chaithanya Junior College",
		percentage: "97%",
	},
	{
		image: ssc,
		imageAlt: "High School Graduation icon",
		course: "High School Diploma",
		duration: {
			from: 2016,
			to: 2017,
		},
		institution: "Vema High School",
		percentage: "92%",
	},
];

const services = [
	{
		icon: webDevelopment,
		title: "Web Development & Design",
	},
	{
		icon: eCommerce,
		title: "E-commerce Development",
	},
	{
		icon: uiUxDesign,
		title: "UI/UX Design",
	},
	{
		icon: appDevelopment,
		title: "App Development",
	},
];

function TechEducation() {
	return (
		<section className="about-section flex flex-col md:flex-row gap-6">
			<div className="about-part w-full md:w-1/3 relative">
				<h2 className="mb-6">My Services</h2>
				<div>
					{services.map((service, index) => {
						return (
							<React.Fragment key={index}>
								<div className="flex items-center gap-3 border-b" key={index}>
									<img className="w-10 h-10" src={service.icon} alt={service.title} />
									<p>{service.title}</p>
								</div>
								{index !== services.length - 1 && <div className="divider-1"></div>}
							</React.Fragment>
						);
					})}
				</div>
			</div>
			<div className="about-part w-full md:w-2/3">
				<h2 className="mb-6">My Education</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-2">
					{educationDetails.map((education, index) => {
						return (
							<div key={index} className="flex gap-3">
								<div className="w-12 h-12 rounded-xl shadow-sm bg-white p-1">
									<img src={education.image} alt={education.imageAlt} />
								</div>
								<div className="space-y-2">
									<h5 className="mb-1">{education.course}</h5>
									<p className="text-xs">{education.institution}</p>
									<p className="text-xs">
										{education.duration.from} - {education.duration.to}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default TechEducation;
