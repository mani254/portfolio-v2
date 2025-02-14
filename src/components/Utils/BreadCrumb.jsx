import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";

function debounce(func, wait) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

function BreadCrumb({ subtitle, title }) {
	const subTitleRef = useRef(null);
	const headingRef = useRef(null);
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

			const splitHeading = new SplitType(headingRef.current, { types: "lines" });
			timeline.fromTo(splitHeading.lines, { opacity: 0.1, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" }, "-=0.3");
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
		<div className="mt-10 py-14 md:mt-0 md:py-20" ref={wrapperRef}>
			<p ref={subTitleRef} className="text-md md:text-lg inline-block text-zinc-600 border-b border-zinc-600">
				{subtitle}
			</p>
			<h1 ref={headingRef} className="mt-10 text-md md:text-2xl" aria-label={title}>
				{title}
			</h1>
		</div>
	);
}

export default BreadCrumb;
