import React, { useState } from "react";

import SmoothScroll from "./components/smoothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";

import "./App.css";

export const MobileContext = React.createContext();

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [mobile, setMobile] = useState(true);

	return (
		<SmoothScroll>
			<MobileContext.Provider value={{ mobile }}>
				<Navbar />
			</MobileContext.Provider>
		</SmoothScroll>
	);
}

export default App;
