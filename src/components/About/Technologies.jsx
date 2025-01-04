import React, { useRef, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { css, expressjs, figma, fingers, git, html, js, mongodb, mysql, nextjs, python, reactjs, redux, tailwind, vscode, nodejs } from "../../utils";
import gsap from "gsap";

const technologies = [
	{ title: "JavaScript", image: js, alt: "JavaScript logo" },
	{ title: "Python", image: python, alt: "Python logo" },
	{ title: "React.js", image: reactjs, alt: "React.js logo" },
	{ title: "Redux", image: redux, alt: "Redux logo" },
	{ title: "Node.js", image: nodejs, alt: "Node.js logo" },
	{ title: "HTML", image: html, alt: "HTML logo" },
	{ title: "CSS", image: css, alt: "CSS logo" },
	{ title: "Express.js", image: expressjs, alt: "Express.js logo" },
	{ title: "MongoDB", image: mongodb, alt: "MongoDB logo" },
	{ title: "Next.js", image: nextjs, alt: "Next.js logo" },
	{ title: "MySQL", image: mysql, alt: "MySQL logo" },
	{ title: "Tailwind CSS", image: tailwind, alt: "Tailwind CSS logo" },
	{ title: "Figma", image: figma, alt: "Figma logo" },
	{ title: "GitHub", image: git, alt: "GitHub logo" },
	{ title: "VS Code", image: vscode, alt: "VS Code logo" },
];

function Technologies() {
	const rowRefs = useRef([]);

	const techRef = useRef(null);
	const gitRef = useRef(null);
	const ctaRef = useRef(null);

	useEffect(() => {
		const initAnimations = () => {
			animations.forEach((animation) => animation.kill());
			animations.length = 0;

			rowRefs.current.forEach((row, index) => {
				const scrollWidth = row.scrollWidth;
				const offsetWidth = row.offsetWidth;
				const distance = scrollWidth - offsetWidth;

				const animation = gsap.fromTo(
					row,
					{ x: index === 1 ? -distance : 0 },
					{
						x: index === 1 ? 0 : -distance,
						duration: 4,
						ease: "linear",
						repeat: -1,
						yoyo: true,
					}
				);
				animations.push(animation);
			});
		};

		const animations = [];

		initAnimations();

		const handleResize = () => {
			initAnimations();
		};

		window.addEventListener("resize", handleResize);

		// Cleanup function to kill animations and remove event listener on unmount
		return () => {
			animations.forEach((animation) => animation.kill());
			window.removeEventListener("resize", handleResize);
		};
	}, [rowRefs]);

	useEffect(() => {
		if (!techRef.current || !gitRef.current || !ctaRef.current) return;
		const techAnimation = gsap.fromTo(
			techRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				ease: "power2.out",
				duration: 0.8,
				scrollTrigger: {
					trigger: techRef.current,
					toggleActions: "play none none reverse",
					start: "top 85%",
				},
			}
		);
		const gitAnimation = gsap.fromTo(
			gitRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				ease: "power2.out",
				duration: 0.8,
				scrollTrigger: {
					trigger: gitRef.current,
					toggleActions: "play none none reverse",
					start: "top 85%",
				},
			}
		);
		const ctaAnimation = gsap.fromTo(
			ctaRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				ease: "power2.out",
				duration: 0.8,
				scrollTrigger: {
					trigger: ctaRef.current,
					toggleActions: "play none none reverse",
					start: "top 85%",
				},
			}
		);
		return () => {
			gitAnimation.kill();
			ctaAnimation.kill();
			techAnimation.kill();
		};
	}, [techRef, gitRef, ctaRef]);

	return (
		<section className="about-section flex flex-col md:flex-row gap-6 md:gap-8 lg-gap-10">
			<div className="about-part w-full  md:w-1/2" ref={techRef}>
				<h2 className="mb-1">My Tech Stack</h2>
				<div className="overflow-visible relative">
					{[technologies.slice(0, 5), technologies.slice(5, 10), technologies.slice(10, 15)].map((array, row) => {
						return (
							<div key={row} className="mt-3 hide-scroll-bar overflow-auto">
								<div
									id="item-z"
									className="flex gap-4 item-z w-auto"
									ref={(el) => {
										if (!el || rowRefs.current.includes(el)) return;
										rowRefs.current.push(el);
									}}>
									{array.map((tech, index) => {
										return (
											<div key={index} className="bg-white flex flex-col gap-1 items-center p-3 min-w-[100px] rounded-xl shadow-lg">
												<img src={tech.image} alt={tech.alt} className="w-9 aspect-square" />
												<p className="text-xxs font-semibold text-center whitespace-nowrap">{tech.title}</p>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
					<div className="absolute w-20 h-full top-0 -left-3 gradient-right"></div>
					<div className="absolute w-20 h-full top-0 -right-3 gradient-left"></div>
				</div>
			</div>
			<div className="flex flex-col w-full md:w-1/2 gap-6 ">
				<div className="about-part" ref={gitRef}>
					<h2 className="mb-6">My Git Contributions</h2>
					<GitHubActivity />
				</div>
				<div className="rounded-3xl p-5 bg-dark flex items-center justify-center relative overflow-hidden cursor-pointer gap-3 md:gap-6 hover:bg-gray-800" ref={ctaRef}>
					<img src={fingers} alt="two fingers 3d icon" className="h-14 md:h-16" />
					<div className="w-full">
						<h4 className="text-white text-sm md:text-md text-center">Let's Work Together!</h4>
						<h4 className="text-white text-sm md:text-md text-center">Send Me a Message</h4>
					</div>
					<img src={fingers} alt="two fingers 3d icon" className="h-14 md:h-16" />
				</div>
			</div>
		</section>
	);
}

function GitHubActivity() {
	const username = "Mani254";
	const customTheme = {
		dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
	};

	return (
		<section className="github-activity">
			<GitHubCalendar username={username} theme={customTheme} blockSize={10} blockMargin={3} fontSize={14} />
		</section>
	);
}

export default Technologies;
