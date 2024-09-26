import React, { useState, useEffect, useRef } from "react";
import { instagram, linkedin, twitter, github, discord, youtube } from "../utils";
import { bannerBackground, bannerVideo } from "../utils";

function Hero() {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [videoSrc, setVideoSrc] = useState(null);
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoSrc === null) {
			const img = new Image();
			img.src = bannerBackground;
			img.onload = () => {
				setVideoSrc(bannerVideo);
			};
		}
		const videoElement = videoRef.current;

		if (videoElement) {
			const handleLoadedData = () => setVideoLoaded(true);
			videoElement.addEventListener("loadeddata", handleLoadedData);
			return () => {
				videoElement.removeEventListener("loadeddata", handleLoadedData);
			};
		}
	}, [videoSrc]);

	return (
		<section className="container flex pt-[68px] h-screen max-h-[850px]">
			<div className="min-w-12 h-full flex gap-5 flex-col items-center justify-between  ml-[6px] py-5">
				<div>
					<span className="h-20 w-[1.5px] bg-dark block rounded-full"></span>
					<div className="relative min-h-32">
						<p className="font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">Contact Me</p>
					</div>
					<span className="h-20 w-[1.5px] bg-dark block rounded-full"></span>
				</div>
				<div className="flex flex-col gap-3">
					<a href="#">
						<img className="w-7" src={github} alt="github svg icon" />
					</a>
					<a href="#">
						<img className="w-7" src={linkedin} alt="linkedin svg icon" />
					</a>
					<a href="#">
						<img className="w-7" src={discord} alt="discord svg icon" />
					</a>
					<a href="#">
						<img className="w-7" src={instagram} alt="instagram svg icon" />
					</a>
					<a href="#">
						<img className="w-7" src={twitter} alt="twitter svg icon" />
					</a>
					<a href="#">
						<img className="w-7" src={youtube} alt="youtube svg icon" />
					</a>
				</div>
			</div>
			<div className="w-full relative">
				<div className="w-full h-full pl-2 py-2">
					<div className="w-full h-full relative rounded-3xl overflow-hidden border-b  border-white pt-20 bg-shaded">{videoSrc ? <video src={videoSrc} autoPlay loop muted className={`w-full h-full object-cover object-center transition-opacity ${videoLoaded ? "block" : "hidden"}`} ref={videoRef} /> : <img src={bannerBackground} alt="Banner" loading="lazy" className={`w-full h-full object-cover object-center ${videoLoaded ? "hidden" : "block"}`} />}</div>
				</div>
				<div className="absolute top-12 left-12">
					<h3>I am Sai Manikanta</h3>
					<h4 className="mt-3 py-1 px-5 rounded-full border border-dark inline-block">Web Developer</h4>
				</div>
				<h1 className="stroke-text text-4xl w-full font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">MERN Stack Developer</h1>
				<p className="absolute right-12 bottom-12 w-full max-w-[364px] font-medium text-md">I create trend-driven, interactive websites that bring your ideas to life and transform them into unforgettable digital experiences.</p>
			</div>
		</section>
	);
}

export default Hero;
