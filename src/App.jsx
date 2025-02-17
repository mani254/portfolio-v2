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
import PageTransition from "./components/Utils/PageTransition";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankyouPage";
export const AppContext = React.createContext();

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [options, setOptions] = useState({
		isMobile: true,
		isNavDark: false,
		isDark: false,
	});

	// console.log("hello");

	// useEffect to handle resize and set the isMobile in the options
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
		<AppContext.Provider value={{ options, setOptions }}>
			<SmoothScroll>
				<Cursor />
				<Navbar />
				<HelmetProvider>
					<Routes>
						<Route
							path="/"
							element={
								<PageTransition>
									<HomePage />
								</PageTransition>
							}
						/>
						<Route
							path="/about"
							element={
								<PageTransition>
									<AboutPage />
								</PageTransition>
							}
						/>
						<Route
							path="/projects"
							element={
								<PageTransition>
									<Projects />
								</PageTransition>
							}
						/>
						<Route
							path="/services"
							element={
								<PageTransition>
									<ServicesPage />
								</PageTransition>
							}
						/>
						<Route
							path="/contact"
							element={
								<PageTransition>
									<ContactPage />
								</PageTransition>
							}
						/>
						<Route
							path="/thankyou"
							element={
								<PageTransition>
									<ThankYouPage />
								</PageTransition>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</HelmetProvider>
			</SmoothScroll>
		</AppContext.Provider>
	);
}

export default App;
