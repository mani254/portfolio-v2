import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
	const [transitioning, setTransitioning] = useState(true);
	const wrapperRef = useRef(null);
	const layer1Ref = useRef(null);
	// const layer2Ref = useRef(null);
	const layer3Ref = useRef(null);
	const pageRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (!transitioning) return;

		const tl = gsap.timeline({
			onComplete: () => {
				setTransitioning(false);
			},
		});

		tl.fromTo(layer1Ref.current, { y: "85%", borderRadius: "600px" }, { y: "0%", borderRadius: 0, duration: 0.8, ease: "power4.out" }, 0);
		// tl.fromTo(layer2Ref.current, { y: "95%", borderRadius: "400px" }, { y: "0%", borderRadius: 0, duration: 0.8, ease: "power4.out" }, 0.2);
		tl.fromTo(layer3Ref.current, { y: "100%", borderRadius: "1200px" }, { y: "0%", duration: 0.8, borderRadius: "50px", ease: "power4.out" }, 0.3);
		tl.to(wrapperRef.current, { opacity: 0, duration: 0.3 }, "-=0.5");
		tl.fromTo(pageRef.current, { y: 50 }, { y: 0, duration: 0.5, ease: "power2.out" }, "-=0.5");

		return () => {
			tl.kill();
		};
	}, [transitioning]);

	useEffect(() => {
		setTransitioning(true);
	}, [location.pathname]);

	return (
		<>
			{transitioning && (
				<div className="fixed inset-0 z-[50] bg-white" ref={wrapperRef}>
					<div className="layer-1 absolute w-full h-screen bg-zinc-200" ref={layer1Ref}></div>
					{/* <div className="layer-2 absolute w-full h-screen bg-zinc-100" ref={layer2Ref}></div> */}
					<div className="layer-3 absolute w-full h-screen bg-white" ref={layer3Ref}></div>
				</div>
			)}

			<div className="page" ref={pageRef}>
				{children}
			</div>
		</>
	);
};

export default PageTransition;
