import React, { useRef, useEffect } from "react";
import ProjectsList from "../components/Projects/ProjectsList";
import gsap from "gsap";
import BreadCrumb from "../components/Utils/BreadCrumb";
import Cta from "../components/Cta/Cta";
import Cta1 from "../components/Cta/Cta-1";

import { Helmet } from "react-helmet-async";

function Projects() {
	const listRef = useRef(null);

	useEffect(() => {
		const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

		timeline.fromTo(listRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, "+=1");

		return () => {
			timeline.kill();
		};
	}, []);

	return (
		<div>
			<Helmet>
				<title>Projects | Manikanta | Web Development Portfolio</title>
				<meta name="description" content="Explore Manikanta's web development projects, from MERN stack applications to creative UI/UX solutions. See my latest work in action!" />
				<meta name="keywords" content="Manikanta projects, web development portfolio, MERN stack apps, freelance work, open-source contributions, UI/UX design" />
				<meta name="author" content="Manikanta" />

				<meta property="og:title" content="Projects | Manikanta | Web Development Portfolio" />
				<meta property="og:description" content="Check out Manikanta's latest projects, showcasing expertise in web development, freelancing, and open-source contributions." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://manidev.in/projects" />
				<meta property="og:image" content="https://manidev.in/images/home-hero-image.webp" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Projects | Manikanta | Web Development Portfolio" />
				<meta name="twitter:description" content="Discover my latest web development projects, from full-stack applications to dynamic UI designs." />
				<meta name="twitter:image" content="https://manidev.in/images/home-hero-image.webp" />
			</Helmet>

			<div className="container max-w-6xl ">
				<BreadCrumb title="Bringing ideas to life with stunning, user-focused designs." subtitle="Explore Work" highlightedText="Bringing ideas to life" />

				<div ref={listRef}>
					<ProjectsList />
				</div>
			</div>
			<div>
				<Cta1 />
				<Cta />
			</div>
		</div>
	);
}

export default Projects;
