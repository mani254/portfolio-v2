import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function debounce(func, wait) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

function BreadCrumb({ subtitle, title, highlightedText }) {
	const subTitleRef = useRef(null);
	const headingRef = useRef(null);
	const spanRef = useRef(null);
	const textRef = useRef(null);
	const wrapperRef = useRef(null);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		let wrapperAnim;
		let timeline;

		const setupAnimation = () => {
			if (wrapperAnim) wrapperAnim.kill();
			if (timeline) timeline.kill();

			wrapperAnim = gsap.to(wrapperRef.current, {
				y: -70,
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top 20%",
					end: "bottom top",
					scrub: true,
				},
				ease: "sine.out",
			});

			timeline = gsap.timeline({ defaults: { ease: "power2.inOut", delay: 0.2 } });

			timeline.fromTo(subTitleRef.current, { opacity: 0.1, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" });

			// Animate the span and text separately
			timeline.fromTo(spanRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
			timeline.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");
		};

		setupAnimation();

		const handleResize = () => {
			const newWidth = window.innerWidth;
			if (newWidth !== width) {
				setWidth(newWidth);
				setupAnimation();
			}
		};

		const debouncedResize = debounce(handleResize, 200);
		window.addEventListener("resize", debouncedResize);

		return () => {
			if (wrapperAnim) wrapperAnim.kill();
			if (timeline) timeline.kill();
			window.removeEventListener("resize", debouncedResize);
		};
	}, [width]);

	return (
		<div className="mt-10 py-14  md:mt-0 md:py-20 mb-20 " ref={wrapperRef}>
			<p ref={subTitleRef} className="text-md md:text-lg inline-block text-zinc-600 border-b border-zinc-600">
				{subtitle}
			</p>
			<h1 ref={headingRef} className="mt-10">
				<span ref={spanRef} className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0FA0D6] via-[#2C47B0] to-[#D753AD] bg-clip-text text-transparent">
					{highlightedText}
				</span>
				<span ref={textRef} className="block text-2xl md:text-3xl">
					{title.replace(highlightedText, "")}
				</span>
			</h1>
		</div>
	);
}

export default BreadCrumb;
