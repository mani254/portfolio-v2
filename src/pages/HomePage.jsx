import React from "react";
import Hero from "../components/Home/Hero";
import { Helmet } from "react-helmet-async";

function HomePage() {
	return (
		<div>
			<Helmet>
				<title>Home | Manikanta | Developer & Freelancer</title>
				<meta name="description" content="Welcome to the official website of Manikanta, a passionate developer and freelancer offering web development, open-source contributions, and creative web solutions." />
				<meta name="keywords" content="Manikanta, developer, freelancer, web development, open-source, creative solutions, portfolio" />
				<meta name="author" content="Manikanta" />
				<meta property="og:title" content="Home | Manikanta | Developer & Freelancer" />
				<meta property="og:description" content="Explore the homepage of Manikanta, a professional web developer and freelancer. Get to know about my work, skills, and contributions." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://manidev.in" />
				<meta property="og:image" content="https://manidev.in/images/home-hero-image.webp" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Home | Manikanta | Developer & Freelancer" />
				<meta name="twitter:description" content="Explore the homepage of Manikanta, a professional web developer and freelancer. Learn more about my work and projects." />
				<meta name="twitter:image" content="https://manidev.in/images/home-hero-image.webp" />
			</Helmet>
			<Hero></Hero>
		</div>
	);
}

export default HomePage;
