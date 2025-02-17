import React from "react";
import MainAbout from "../components/About/MainAbout";
import TechEducation from "../components/About/TechEducation";
import MoreAbout from "../components/About/MoreAbout";
import Experience from "../components/About/Experience";
import Technologies from "../components/About/Technologies";
import Cta from "../components/Cta/Cta";
import { Helmet } from "react-helmet-async";
import Cta1 from "../components/Cta/Cta-1";

function AboutPage() {
	return (
		<div>
			<div className="about-page container space-y-6 md:space-y-8 lg:space-y-10 my-10 max-w-6xl">
				<Helmet>
					<title>About Manikanta | Web Developer & Freelancer for Scalable Solutions</title>
					<meta name="description" content="Discover Manikanta’s journey as a Web Developer & Freelancer. Learn about my skills, experience, technologies, and contributions to open source." />
					<meta name="keywords" content="web development, freelance web developer, MERN stack developer, full-stack developer, open-source projects, hire a freelancer, modern web solutions" />
					<meta name="author" content="Manikanta" />
					<meta property="og:title" content="About Manikanta | Web Developer & Freelancer for Scalable Solutions" />
					<meta property="og:description" content="Explore my journey as a developer & freelancer, my tech stack, and contributions to open-source projects." />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://manidev.in/about" />
					<meta property="og:image" content="https://manidev.in/images/home-hero-image.webp" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="About Manikanta | Web Developer & Freelancer for Scalable Solutions" />
					<meta name="twitter:description" content="Explore my journey as a developer & freelancer, my tech stack, and contributions to open-source projects." />
					<meta name="twitter:image" content="https://manidev.in/images/home-hero-image.webp" />
				</Helmet>
				<MainAbout />
				<MoreAbout />
				<TechEducation />
				<Technologies />
				<Experience />
			</div>
			<div>
				<Cta1 />
				<Cta />
			</div>
		</div>
	);
}

export default AboutPage;
