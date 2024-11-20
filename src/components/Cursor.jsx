import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";

import { MobileContext } from "../App";

function Cursor() {
	const isMobile = useContext(MobileContext);
	const cursorRef = useRef(null);

	function handleMouseMove(event) {
		const x = event.pageX;
		const y = event.pageY;
		console.log(x, y);

		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
				left: x,
				top: y,
				duration: 0.25,
				ease: "circle.in",
			});
		}
	}

	useEffect(() => {
		if (isMobile) return;
		document.addEventListener("mousemove", handleMouseMove);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isMobile]);

	return <div className="w-3 h-3 bg-dark rounded-full absolute transform-x-[-50%] transform-y-[-50%] z-50 bg-opacity-80" style={{ pointerEvents: "none" }} ref={cursorRef}></div>;
}

export default Cursor;
