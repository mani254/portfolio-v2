import React, { useRef } from "react";
import BreadCrumb from "../components/Utils/BreadCrumb";
import ServiceImage from "../components/Services/ServiceImage";
import ScrollingServices from "../components/Services/ScrollingServices";
import Cta from "../components/Cta/Cta";
import Cta1 from "../components/Cta/Cta-1";
import { Helmet } from "react-helmet-async";

function ServicesPage() {
	const servicePageRef = useRef(null);

	return (
		<div ref={servicePageRef}>
			<Helmet>
				<title>Our Services | Web Development & Business Solutions</title>
				<meta name="description" content="Explore our professional web development and business solutions. From custom websites to scalable applications, we bring creative and cutting-edge services." />
				<meta name="keywords" content="web development services, business solutions, creative web design, MERN stack development, freelancing, custom web applications" />
				<meta name="author" content="Manikanta" />

				<meta property="og:title" content="Our Services | Web Development & Business Solutions" />
				<meta property="og:description" content="Discover expert web development and business solutions designed to elevate your brand. Get custom-built applications and cutting-edge digital services." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://manidev.in/services" />
				<meta property="og:image" content="https://manidev.in/images/home-hero-image.webp" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Our Services | Web Development & Business Solutions" />
				<meta name="twitter:description" content="Discover expert web development and business solutions designed to elevate your brand. Get custom-built applications and cutting-edge digital services." />
				<meta name="twitter:image" content="https://manidev.in/images/home-hero-image.webp" />
			</Helmet>
			<div className="max-w-6xl m-auto container">
				<BreadCrumb title="Empowering businesses with creative and cutting-edge solutions." subtitle="Our Services" highlightedText="Empowering businesses" />
				<ServiceImage />
			</div>
			<div className="mt-[150px]">
				<ScrollingServices mainPage={servicePageRef} />
			</div>
			{/* <div className="h-[600px]"></div> */}
			<div className="md:-mt-40">
				<Cta1 />
				<Cta />
			</div>
		</div>
	);
}

export default ServicesPage;
