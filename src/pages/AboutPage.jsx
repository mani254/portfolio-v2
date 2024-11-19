import React from "react";
import MainAbout from "../components/About/MainAbout";
import TechEducation from "../components/About/TechEducation";
import MoreAbout from "../components/About/MoreAbout";
import Experience from "../components/About/Experience";
import Technologies from "../components/About/Technologies";

function AboutPage() {
	return (
		<div className="about-page container space-y-6">
			<MainAbout />
			<MoreAbout />
			<TechEducation />
			<Technologies />
			<Experience />
		</div>
	);
}

export default AboutPage;
