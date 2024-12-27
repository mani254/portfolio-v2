import React from "react";
import MainAbout from "../components/About/MainAbout";
import TechEducation from "../components/About/TechEducation";
import MoreAbout from "../components/About/MoreAbout";
import Experience from "../components/About/Experience";
import Technologies from "../components/About/Technologies";

import { Helmet } from "react-helmet-async";
import AboutBlog from "../components/About/aboutBlog";

function AboutPage() {
	return (
		<div className="about-page container space-y-6">
			<Helmet>
				<title>About Manikanta | Developer & Freelancer</title>
				<meta name="description" content="Learn more about Manikanta, a skilled developer and freelancer with expertise in creating impactful web solutions, open-source contributions, and innovative web technologies." />
				<meta name="keywords" content="Manikanta, developer, freelancer, web development, open-source, projects, technologies" />
				<meta name="author" content="Manikanta" />
				<meta property="og:title" content="About Manikanta | Developer & Freelancer" />
				<meta property="og:description" content="Explore the journey, skills, and contributions of Manikanta, a professional developer and freelancer." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://manidev.in/about" />
				<meta property="og:image" content="https://manidev.in/images/home-hero-image.webp" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="About Manikanta | Developer & Freelancer" />
				<meta name="twitter:description" content="Explore the journey, skills, and contributions of Manikanta, a professional developer and freelancer." />
				<meta name="twitter:image" content="https://manidev.in/images/home-hero-image.webp" />
			</Helmet>
			<MainAbout />
			<MoreAbout />
			<TechEducation />
			<Technologies />
			<Experience />
			<AboutBlog />
		</div>
	);
}

export default AboutPage;
