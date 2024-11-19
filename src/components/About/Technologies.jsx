import React, { useRef, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { css, expressjs, figma, html, js, mysql, nextjs, python, reactjs, redux, tailwind } from "../../utils";
import gsap from "gsap";

const technologies = [
	{ title: "JavaScript", image: js, alt: "JavaScript logo" },
	{ title: "Python", image: python, alt: "Python logo" },
	{ title: "React.js", image: reactjs, alt: "React.js logo" },
	{ title: "Redux", image: redux, alt: "Redux logo" },
	{ title: "Node.js", image: expressjs, alt: "Node.js logo" },
	{ title: "HTML", image: html, alt: "HTML logo" },
	{ title: "CSS", image: css, alt: "CSS logo" },
	{ title: "Express.js", image: expressjs, alt: "Express.js logo" },
	{ title: "MongoDB", image: tailwind, alt: "MongoDB logo" },
	{ title: "Next.js", image: nextjs, alt: "Next.js logo" },
	{ title: "MySQL", image: mysql, alt: "MySQL logo" },
	{ title: "Tailwind CSS", image: tailwind, alt: "Tailwind CSS logo" },
	{ title: "Figma", image: figma, alt: "Figma logo" },
	{ title: "GitHub", image: figma, alt: "GitHub logo" },
	{ title: "VS Code", image: figma, alt: "VS Code logo" },
];

function Technologies() {
	const rowRefs = useRef([]);

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

	return (
		<section className="about-section flex gap-6">
			<div className="about-part w-1/2 ">
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
			<div className="flex flex-col w-1/2 gap-6 ">
				<div className="about-part ">
					<h2 className="mb-6">My Git Contributions</h2>
					<GitHubActivity />
				</div>
				<div className="rounded-3xl p-5 bg-dark flex items-center justify-center relative overflow-hidden">
					<img src="" alt="" />
					<div>
						<h2 className="text-white">Let's Work Together!</h2>
						<h2 className="text-white">Send Me a Message</h2>
					</div>
					<div className="absolute"></div>
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
