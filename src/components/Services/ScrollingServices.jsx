import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import services from "../../utils/servicesArray";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { AppContext } from "../../App";

function ScrollingServices({ mainPage }) {
	const servicesRef = useRef([]);
	const servicesBoxes = useRef([]);
	const contentRefs = useRef([]);
	const mobileCards = useRef([]);

	const { options } = useContext(AppContext);
	const { isMobile } = options;

	// color chaning
	useEffect(() => {
		if (!mainPage || !servicesRef.current || isMobile) return;

		const ctx = gsap.context(() => {
			servicesRef.current.forEach((el, index) => {
				if (el) {
					ScrollTrigger.create({
						trigger: el,
						start: "top 50%",
						end: "bottom 50%",
						toggleActions: "play none none reverse",
						onEnter: () => gsap.to(mainPage.current, { backgroundColor: services[index].backgroundColor, duration: 0.5 }),
						onEnterBack: () => gsap.to(mainPage.current, { backgroundColor: services[index].backgroundColor, duration: 0.5 }),
						onLeave: () => gsap.to(mainPage.current, { backgroundColor: "#FFFFFF", duration: 0.5 }),
						onLeaveBack: () => gsap.to(mainPage.current, { backgroundColor: "#FFFFFF", duration: 0.5 }),
						scrub: 1, // Enables smooth transition while scrolling
					});
				}
			});
		});

		return () => ctx.revert();
	}, [mainPage, servicesRef, isMobile]);

	// card image animation
	useEffect(() => {
		if (!servicesBoxes.current || !servicesRef.current || isMobile) return;

		const ctx = gsap.context(() => {
			servicesRef.current.forEach((el, index) => {
				const isLast = index === servicesRef.current.length - 1;
				if (el && servicesBoxes.current[index] && !isLast) {
					const imageWrapper = servicesBoxes.current[index].querySelector(".image-wrapper");
					gsap.fromTo(
						imageWrapper,
						{
							y: "10px",
						},
						{
							y: "0px",
							scrollTrigger: {
								trigger: el,
								start: "top 70%",
								end: "top 20%",
								scrub: true,
							},
						}
					);
					gsap.fromTo(
						servicesBoxes.current[index],
						{
							clipPath: "inset(0px 0px 0%)",
						},
						{
							clipPath: "inset(0px 0px 100%)",
							scrollTrigger: {
								trigger: el,
								start: "bottom 85%",
								end: "bottom 0%",
								scrub: true,
							},
						}
					);
				}
			});
		});

		return () => ctx.revert();
	}, [servicesBoxes, servicesRef, isMobile]);

	//   text animation
	useEffect(() => {
		if (!contentRefs.current || isMobile) return;

		const ctx = gsap.context(() => {
			contentRefs.current.forEach((el, index) => {
				if (el) {
					gsap.to(el, {
						y: "-50",
						scrollTrigger: {
							trigger: el,
							start: "top 0%",
							end: "top 50%",
							scrub: true,
						},
					});
				}
			});
		});

		return () => ctx.revert();
	}, [contentRefs, isMobile]);

	useEffect(() => {
		if (mobileCards.current.length === 0) return;

		const ctx = gsap.context(() => {
			mobileCards.current.forEach((el, index) => {
				if (el) {
					gsap.fromTo(
						el,
						{
							opacity: 0,
							y: 100,
							scale: 0.9,
						},
						{
							opacity: 1,
							y: 0,
							scale: 1,
							duration: 1.2,
							ease: "power1.inout",
							scrollTrigger: {
								trigger: el,
								start: "top 95%",
								end: "top 80%",
								scrub: 1,
								markers: false, // Set to `true` for debugging
							},
						}
					);
				}
			});
		});

		return () => ctx.revert();
	}, [mobileCards]);

	return (
		<>
			{isMobile ? (
				<div className="container space-y-[100px] overflow-hidden px-4">
					{services.map((service, index) => (
						<div key={service.id} ref={(el) => el && !mobileCards.current.includes(el) && mobileCards.current.push(el)}>
							<div
								className="w-full h-full px-5 py-10 flex items-center justify-center rounded-3xl"
								style={{
									backgroundColor: `${service.boxColor}77`,
								}}>
								<div className="image-wrapper relative w-full aspect-[16/9] rounded-2xl overflow-hidden" style={{ boxShadow: `0px 4px 15px ${services[index].cursorColor}` }}>
									<img src={service.image} alt={service.title} className="w-full h-full object-center object-cover" />
								</div>
							</div>

							{/* Content Section */}
							<div className=" bg-white rounded-lg px-1 py-2">
								<div className="flex items-center justify-between mb-4">
									<h2 className="font-semibold text-gray-900" style={{ fontSize: "22px" }}>
										{service.title}
									</h2>
									<h2 className="font-semibold  text-gray-800 flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100" style={{ fontSize: "16px" }}>
										Contact{" "}
										<span className="-rotate-45">
											<FaArrowRight />
										</span>
									</h2>
								</div>
								<h5 className="text-xs italic text-gray-700 mb-2 text-center">{service.subTitle}</h5>
								<p className="text-xs text-gray-600 text-center">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="flex  relative max-w-6xl container m-auto">
					<div className=" w-1/2">
						{services.map((service, index) => {
							return (
								<div className="flex items-center justify-center h-screen" ref={(el) => el && !servicesRef.current.includes(el) && servicesRef.current.push(el)} data-background={service.backgroundColor} data-cursor-color={service.cursorColor} key={service.id}>
									<div className="space-y-3 max-w-[380px]" ref={(el) => el && !contentRefs.current.includes(el) && contentRefs.current.push(el)}>
										<h1 className="text-2xl font-semibold" style={{ color: service.cursorColor }}>
											{service.title}
										</h1>
										<h5>{service.subTitle}</h5>
										<p>{service.description}</p>
										<NavLink to="/contact" className="pt-3 inline-block move-over">
											<button className="w-full md:w-auto flex-list-button">
												<span className="px-7 py-1 inline-block">Contact Us</span>
											</button>
										</NavLink>
									</div>
								</div>
							);
						})}
					</div>
					<div className="w-1/2">
						<div className="h-screen sticky top-0 flex items-center justify-center">
							<div className="w-full max-w-[400px] aspect-[8/8] rounded-3xl relative overflow-hidden">
								{services.map((service, index) => {
									return (
										<div
											key={service.id}
											className="w-full h-full absolute p-8 flex items-center justify-center"
											ref={(el) => el && !servicesBoxes.current.includes(el) && servicesBoxes.current.push(el)}
											style={{
												background: service.boxColor,
												zIndex: services.length - index,
											}}>
											<div className="image-wrapper relative w-full aspect-[16/9] rounded-2xl overflow-hidden" style={{ boxShadow: services[index].boxShadow }}>
												<img src={service.image} alt={service.title} className="w-full h-full object-center object-cover" />
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ScrollingServices;
