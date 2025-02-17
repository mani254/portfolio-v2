import React from "react";
import Hero from "../components/Home/Hero";
import { Helmet } from "react-helmet-async";

function HomePage() {
	return (
		<div>
			<Helmet>
				<title>Manikanta | Web Developer & Freelancer for Scalable Web Solutions</title>
				<meta name="description" content="Manikanta – Web Developer & Freelancer specializing in scalable, high-performance web applications. I help businesses and startups build modern web solutions. Explore my portfolio now!" />
				<meta name="keywords" content="web development, freelance web developer, MERN stack developer, full-stack development, open-source projects, hire a freelancer, modern web apps" />
				<meta name="author" content="Manikanta" />
				<meta property="og:title" content="Manikanta | Web Developer & Freelancer for Scalable Web Solutions" />
				<meta property="og:description" content="Need a web developer for your next project? I specialize in full-stack development and freelancing. Let’s build something amazing together!" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://manidev.in" />
				<meta property="og:image" content="https://manidev.in/images/home-hero-image.webp" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Manikanta | Web Developer & Freelancer for Scalable Web Solutions" />
				<meta name="twitter:description" content="Need a web developer for your next project? I specialize in full-stack development and freelancing. Let’s build something amazing together!" />
				<meta name="twitter:image" content="https://manidev.in/images/home-hero-image.webp" />
			</Helmet>
			<Hero />
		</div>
	);
}

export default HomePage;
