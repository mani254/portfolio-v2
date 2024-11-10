import React, { useState, useEffect } from "react";

import SmoothScroll from "./components/smoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Navbar from "./components/Navbar";

import "./App.css";
// import Hero from "./components/Hero";
// import About from "./components/About";
import Cursor from "./components/Cursor";

import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintainance";
export const MobileContext = React.createContext();

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		function handleResize() {
			window.innerWidth > 600 ? setIsMobile(false) : setIsMobile(true);
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<SmoothScroll>
			<MobileContext.Provider value={isMobile}>
				<Cursor />
				{/* <Navbar /> */}
				<Routes>
					<Route path="/" element={<Maintenance />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				{/* <Hero />
				<About /> */}
				{/* <div className="h-screen"></div> */}
			</MobileContext.Provider>
		</SmoothScroll>
	);
}

export default App;
