import React, { useEffect, useRef } from "react";
import { freelancing, webomindapps, githubFill, instagramMobile, instagramColoured, instagramFilled, cartoonImage, instagram } from "../../utils";
import { socialMedia } from "../../utils";

import gsap from "gsap";

const experiences = [
	{
		image: webomindapps,
		title: "Webomindapps Private Limited",
		duration: {
			from: "Aug 2023",
			to: "July 2024",
		},
		designation: "Web Designer",
		description: "Contributed to creating visually appealing and user-friendly website designs. Collaborated with cross-functional teams to deliver projects tailored to client requirements, ensuring seamless user experiences and adherence to industry standards.",
	},
	{
		image: freelancing,
		title: "Freelancing",
		duration: {
			from: "July 2023",
			to: "Present",
		},
		designation: "Web Development Services",
		description: "Provided end-to-end web development solutions to clients, focusing on building robust and scalable websites. Specialized in delivering custom features and optimizing websites for performance and usability, showcasing expertise in both front-end and back-end development.",
	},
];

const leftSocials = socialMedia.slice(0, 3);
const rightSocials = socialMedia.slice(3);

function Experience() {
	const expRef = useRef(null);
	const expWrapper = useRef(null);
	const instaRef = useRef(null);
	const gitRef = useRef(null);
	const socialRef = useRef(null);

	useEffect(() => {
		if (!expRef.current || !instaRef.current || !gitRef.current || !socialRef.current) return;

		const scaleUp = gsap.fromTo(
			[instaRef.current, gitRef.current],
			{ scale: 0.5, opacity: 0 },
			{
				scale: 1,
				opacity: 1,
				ease: "power3.out",
				duration: 1,
				scrollTrigger: {
					trigger: instaRef.current,
					toggleActions: "play none none reverse",
					start: "top 85%",
				},
			}
		);

		const socialAnimation = gsap.fromTo(
			socialRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				ease: "power2.out",
				duration: 0.8,
				scrollTrigger: {
					trigger: socialRef.current,
					toggleActions: "play none none reverse",
					start: "top 85%",
				},
			}
		);

		const expTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: expRef.current,
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
		});
		expTimeline.fromTo(expRef.current, { opacity: 0, y: 70 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.8 });
		expTimeline.fromTo(expWrapper.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.5, stagger: 0.08 });

		return () => {
			scaleUp.kill();
			socialAnimation.kill();
		};
	}, [expRef, instaRef, gitRef, socialRef]);

	return (
		<section className="about-section flex flex-col md:flex-row gap-6 md:gap-8 lg-gap-10">
			<div className="about-part md:w-2/3 w-full" ref={expRef}>
				<h2 className="mb-6">My Experience</h2>
				<div ref={expWrapper}>
					{experiences.map((exp, index) => {
						return (
							<React.Fragment key={index}>
								<div key={index} className="flex items-start gap-3">
									<div className={` rounded-xl shadow-sm bg-white ${index === 0 ? "p-2" : "p-1"}`}>
										<img className="min-w-12 h-12" src={exp.image} alt={exp.title} />
									</div>
									<div>
										<div className=" md:flex items-end justify-between">
											<div>
												<h5 className="mb-1">{exp.title}</h5>
												<p className="text-xs">{exp.designation}</p>
											</div>
											<div>
												<p className="text-xs text-opacity-60">
													{exp.duration.from} - {exp.duration.to}
												</p>
											</div>
										</div>
										<p className="text-xs mt-3">{exp.description}</p>
									</div>
								</div>
								{index !== experiences.length - 1 && <div className="divider-2"></div>}
							</React.Fragment>
						);
					})}
				</div>
			</div>
			<div className="md:w-1/3 space-y-6 w-full">
				<div className="flex flex-row md:flex-col lg:flex-row gap-6">
					<div className=" w-1/2 md:w-full aspect-square overflow-hidden rounded-3xl bg-gray-200 relative cursor-pointer group " ref={instaRef}>
						<img className="w-full" src={instagramMobile} alt="freelancer cartoon image" />
						<div className={` rounded-xl w-10 h-10 shadow-sm bg-white p-1 absolute top-2 right-2`}>
							<img className="w-full h-full" src={instagramColoured} alt="instagram coloured svg icon" />
						</div>
						<div className="absolute w-full h-full bg-dark bg-opacity-0 inset-0 flex flex-col items-center justify-center gap-3 group-hover:bg-opacity-70 transition-all duration-400">
							<img src={instagramFilled} className="scale-[1.4] rotate-45 opacity-0 group-hover:rotate-0 group-hover:scale-[1] group-hover:opacity-100 transition-all duration-200 delay-150" alt="insgram filled icon" />
							<h5 className="text-center text-white scale-[1.3] opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-[1] transition-all duration-200 delay-200">Follow Me On Instagram</h5>
						</div>
					</div>
					<div className=" w-1/2 md:w-full aspect-square overflow-hidden rounded-3xl bg-dark bg-opacity-95 relative cursor-pointer" ref={gitRef}>
						<h4 className="absolute z-20 text-white bottom-3 left-1/2 -translate-x-1/2 text-opacity-80 font-bold text-center">Github</h4>
						<div className="loader">
							<div className="box">
								<img src={githubFill} className="w-full h-full" style={{ filter: "invert(0.3)" }} alt="github filled " />
							</div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
						</div>
					</div>
				</div>
				<div className="about-part md:hidden lg:block" ref={socialRef}>
					<h2 className="text-center pb-6">Social Media Links</h2>
					<div className="flex mt-3 gap-3">
						<div className="w-1/5 flex flex-col justify-between ">
							{leftSocials.map((social, index) => (
								<SingleSocialMedia key={index} social={social} right={true} />
							))}
						</div>
						<div className="w-3/5">
							<img src={cartoonImage} alt="freelancer cartoon image" />
						</div>
						<div className="w-1/5 flex flex-col justify-between items-end ">
							{rightSocials.map((social, index) => (
								<SingleSocialMedia key={index} social={social} right={false} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function SingleSocialMedia({ social, right }) {
	// Generate random values for animation
	const duration = `${Math.random() * 2 + 2}s`;
	const distance = `${Math.random() * 8 + 4}px`;
	const delay = `${Math.random() * 1}s`;

	return (
		<div className={`max-w-9 aspect-square ${right ? "odd:translate-x-2 even:-translate-x-2" : "odd:-translate-x-2 even:translate-x-2"} hover:scale-110 cursor-pointer transition-transform duration-300`}>
			<div
				className="floating-icon "
				style={{
					animationDuration: duration,
					animationDelay: delay,
					"--float-distance": distance,
				}}>
				<img className="max-w-7 w-7" src={social.image} alt={social.alt} />
			</div>
		</div>
	);
}

export default Experience;
