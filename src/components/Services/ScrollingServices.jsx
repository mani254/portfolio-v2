import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import services from "../../utils/servicesArray";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AppContext } from "../../App";

function ScrollingServices({ mainPage }) {
	const servicesRef = useRef([]);
	const servicesBoxes = useRef([]);
	const contentRefs = useRef([]);
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
						onEnter: () => gsap.set(mainPage.current, { backgroundColor: services[index].backgroundColor }),
						onEnterBack: () => gsap.set(mainPage.current, { backgroundColor: services[index].backgroundColor }),
						onLeave: () => gsap.set(mainPage.current, { backgroundColor: "#FFFFFF" }),
						onLeaveBack: () => gsap.set(mainPage.current, { backgroundColor: "#FFFFFF" }),
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
				if (el && servicesBoxes.current[index]) {
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

	return (
		<>
			{isMobile ? (
				<div className="space-y-32 mb-32">
					{services.map((service, index) => {
						return (
							<div className="flex flex-col gap-5 container max-w-[500px]">
								<div
									key={service.id}
									className="w-full h-full aspect-[8/8] rounded-3xl overflow-hidden p-4 text-center flex items-center justify-center"
									style={{
										background: service.boxColor,
									}}>
									<div className="image-wrapper relative w-full aspect-[16/9] rounded-2xl overflow-hidden" style={{ boxShadow: services[index].boxShadow }}>
										<img src={service.image} alt={service.title} className="w-full h-full object-center object-cover" />
									</div>
								</div>
								<div className="flex items-center justify-center" key={service.id}>
									<div className="space-y-2">
										<h1 className="text-xl text-center">{service.title}</h1>
										<h5 className="text-center">{service.subTitle}</h5>
										<p className="text-center">{service.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="flex  relative max-w-6xl container m-auto">
					<div className=" w-1/2">
						{services.map((service, index) => {
							return (
								<div className="flex items-center justify-center h-screen" ref={(el) => el && !servicesRef.current.includes(el) && servicesRef.current.push(el)} data-background={service.backgroundColor} data-cursor-color={service.cursorColor} key={service.id}>
									<div className="space-y-3" ref={(el) => el && !contentRefs.current.includes(el) && contentRefs.current.push(el)}>
										<h1 className="text-2xl">{service.title}</h1>
										<h5>{service.subTitle}</h5>
										<p>{service.description}</p>
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
