import React, { useState } from "react";

import SmoothScroll from "./components/smoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";

import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";

export const MobileContext = React.createContext();

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [mobile, setMobile] = useState(true);

	return (
		<SmoothScroll>
			<MobileContext.Provider value={{ mobile }}>
				<Navbar />
				<Hero />
				<About />
				<div className="h-screen"></div>
			</MobileContext.Provider>
		</SmoothScroll>
	);
}

export default App;
