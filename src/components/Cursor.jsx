import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { AppContext } from "../App";

function Cursor() {
	const { options } = useContext(AppContext);
	const { isMobile } = options;
	const cursorRef = useRef(null);

	// Helper to update cursor styles
	const updateCursorStyles = (width, height, mixBlendMode, backgroundColor, duration = 0.25) => {
		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
				width,
				height,
				duration,
				ease: "power3.out",
			});
			cursorRef.current.style.mixBlendMode = mixBlendMode;
			cursorRef.current.style.backgroundColor = backgroundColor;
		}
	};

	// Mouse move handler
	const handleMouseMove = (event) => {
		const x = event.pageX;
		const y = event.pageY;

		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
				left: x,
				top: y,
				duration: 0.25,
				ease: "circle.in",
			});
		}

		// Handle hover effects for elements with 'has-c-over' class
		const hoverElements = document.querySelectorAll(".has-c-over");
		hoverElements.forEach((el) => {
			const rect = el.getBoundingClientRect();
			const scrollX = window.scrollX || window.pageXOffset;
			const scrollY = window.scrollY || window.pageYOffset;

			// Adjust mouse position by scroll offset
			const adjustedX = x - scrollX;
			const adjustedY = y - scrollY;

			const isNear = adjustedX >= rect.left - 20 && adjustedX <= rect.right + 20 && adjustedY >= rect.top - 10 && adjustedY <= rect.bottom + 10;

			if (isNear) {
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const deltaX = adjustedX - centerX;
				const deltaY = adjustedY - centerY;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				const maxDistance = 7; // Maximum distance cursor moves towards element

				const moveX = (deltaX / distance) * Math.min(distance, maxDistance);
				const moveY = (deltaY / distance) * Math.min(distance, maxDistance);

				gsap.to(el, {
					x: moveX,
					y: moveY,
					duration: 0.2,
					ease: "power1.in",
				});
			} else {
				gsap.to(el, {
					x: 0,
					y: 0,
					duration: 0.2,
				});
			}
		});
	};

	// Mouse enter handler
	const handleMouseEnter = () => {
		updateCursorStyles("50px", "50px", "difference", "white");
	};

	// Mouse leave handler
	const handleMouseLeave = () => {
		updateCursorStyles("10px", "10px", "normal", "rgb(45,45,45)");
	};

	useEffect(() => {
		if (isMobile) return;

		// Add mousemove listener
		document.addEventListener("mousemove", handleMouseMove);

		// Add hover listeners for elements with has-c-over class
		const hoverElements = document.querySelectorAll(".has-c-over");
		hoverElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		// Cleanup listeners on component unmount
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			hoverElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}, [isMobile]);

	return (
		<div
			className="rounded-full absolute z-50"
			style={{
				width: "10px",
				height: "10px",
				pointerEvents: "none",
				position: "absolute",
				transform: "translate(-50%, -50%)",
				backgroundColor: "rgb(45,45,45)",
			}}
			ref={cursorRef}></div>
	);
}

export default Cursor;
