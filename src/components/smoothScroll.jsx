import React, { useEffect, useRef, useContext } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";

const SmoothScroll = ({ children }) => {
	const lenisRef = useRef();
	const location = useLocation();
	const { options, setOptions } = useContext(AppContext);

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 750);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	}, []);

	useEffect(() => {
		lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
		setOptions((prev) => ({ ...prev, isNavDark: false }));
	}, [location.pathname]);

	return (
		<ReactLenis root ref={lenisRef} autoRaf={false}>
			<main>{children}</main>
		</ReactLenis>
	);
};

export default SmoothScroll;
