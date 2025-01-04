import React, { useState, useEffect } from "react";

import SmoothScroll from "./components/smoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Cursor from "./components/Cursor";

import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import ServicesPage from "./pages/ServicesPage";
export const AppContext = React.createContext();

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [options, setOptions] = useState({
		isMobile: true,
		isNavDark: false,
		isDark: false,
	});

	//useEffect to handle the reaize and set the isMobile in the options
	useEffect(() => {
		function handleResize() {
			window.innerWidth > 768 ? setOptions({ ...options, isMobile: false }) : setOptions({ ...options, isMobile: true });
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<SmoothScroll>
			<AppContext.Provider value={{ options, setOptions }}>
				<Cursor />
				<Navbar />
				<HelmetProvider>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</HelmetProvider>
			</AppContext.Provider>
		</SmoothScroll>
	);
}

export default App;
