import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { AppContext } from "../App";
import { useLocation } from "react-router-dom";

function Cursor() {
	const { options } = useContext(AppContext);
	const { isMobile } = options;
	const cursorRef = useRef(null);
	const textRef = useRef(null);
	const location = useLocation();

	const updateCursorStyles = (width, height, mixBlendMode, backgroundColor = "rgb(65,65,65)", duration = 0.25) => {
		if (cursorRef.current) {
			gsap.to(cursorRef.current, {
				width,
				height,
				duration,
				ease: "power2.out",
			});
			cursorRef.current.style.mixBlendMode = mixBlendMode;
			cursorRef.current.style.backgroundColor = backgroundColor;
		}
	};

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
				const maxDistance = 10; // Maximum distance cursor moves towards element

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

	const handleMouseEnter = () => {
		updateCursorStyles("50px", "50px", "difference", "white");
	};

	const handleMouseLeave = () => {
		updateCursorStyles("12px", "12px", "normal");
	};

	const handleTextCursorEnter = (event) => {
		const text = event.target.getAttribute("data-text");
		if (textRef.current) {
			textRef.current.textContent = text;
		}
		updateCursorStyles("65px", "65px", "normal");
		textRef.current.style.color = "white";
		textRef.current.style.fontSize = "12px";
	};

	const handleTextCursorLeave = () => {
		if (textRef.current) {
			textRef.current.textContent = "";
		}
		updateCursorStyles("12px", "12px", "normal");
	};

	const handleLinkCursorEnter = () => {
		updateCursorStyles("60px", "60px", "normal", "rgba(65,65,65,0.1)");
	};

	const handleLinkCursorLeave = () => {
		updateCursorStyles("12px", "12px", "normal");
	};

	useEffect(() => {
		if (isMobile) return;

		document.addEventListener("mousemove", handleMouseMove);

		const hoverElements = document.querySelectorAll(".has-c-over");
		hoverElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		const textCursorElements = document.querySelectorAll(".text-cursor");
		textCursorElements.forEach((el) => {
			el.addEventListener("mouseenter", handleTextCursorEnter);
			el.addEventListener("mouseleave", handleTextCursorLeave);
		});

		const hoverLinks = document.querySelectorAll(".hover-link");
		hoverLinks.forEach((el) => {
			el.addEventListener("mouseenter", handleLinkCursorEnter);
			el.addEventListener("mouseleave", handleLinkCursorLeave);
		});

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			hoverElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
			textCursorElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleTextCursorEnter);
				el.removeEventListener("mouseleave", handleTextCursorLeave);
			});
			hoverLinks.forEach((el) => {
				el.removeEventListener("mouseenter", handleLinkCursorEnter);
				el.removeEventListener("mouseleave", handleLinkCursorLeave);
			});
		};
	}, [isMobile, location]);

	return (
		<div
			className="rounded-full absolute z-50 flex items-center justify-center"
			style={{
				width: "12px",
				height: "12px",
				pointerEvents: "none",
				position: "absolute",
				transform: "translate(-50%, -50%)",
				backgroundColor: "rgb(65,65,65)",
			}}
			ref={cursorRef}>
			<span className="text-xxs text-center" ref={textRef}></span>
		</div>
	);
}

export default Cursor;
