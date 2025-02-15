import React, { useState, useEffect, useRef } from "react";
import { instagram, linkedin, twitter, github, discord, youtube } from "../../utils";
import { bannerBackground, bannerVideo } from "../../utils";
import ParticleText from "../Utils/ParticleText";
import SplitType from "split-type";
import gsap from "gsap";

function Hero() {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const [videoSrc, setVideoSrc] = useState(null);
	const videoRef = useRef(null);

	const titleRef = useRef(null);
	const textRef = useRef(null);

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

	useEffect(() => {
		if (!titleRef.current || !textRef.current) return;

		let splitTitle = null;
		let splitPara = null;

		const tl = gsap.timeline();

		splitTitle = new SplitType(titleRef.current, { types: "words", tagName: "span" });
		splitPara = new SplitType(textRef.current, { types: "words", tagName: "span" });

		tl.fromTo(splitTitle.words, { x: 20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.03, ease: "power2.out", duration: 1, delay: "0.5" });

		tl.fromTo(splitPara.words, { x: 20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.03, ease: "power2.out", duration: 1 }, "+=0.5");

		return () => {
			tl.kill();
		};
	}, [titleRef, textRef]);

	return (
		<section className="md:container flex max-h-[850px]" style={{ height: "calc(100vh - 75px)" }}>
			<div className="min-w-12 h-full sm:flex gap-5 flex-col items-center justify-between  ml-[6px] py-5 hidden">
				<div>
					<span className="h-20 w-[1.5px] bg-dark block rounded-full"></span>
					<div className="relative min-h-32">
						<p className="font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">Contact Me</p>
					</div>
					<span className="h-20 w-[1.5px] bg-dark block rounded-full"></span>
				</div>
				<div className="flex flex-col gap-4">
					<a className="hover-link" href="https://github.com/mani254" target="_blank">
						<img className="w-7 hover:scale-125 transition-transform duration-300 ease-in-out" src={github} alt="github svg icon" />
					</a>
					<a className="hover-link" href="https://www.linkedin.com/in/sai0421/" target="_blank">
						<img className="w-7 hover:scale-125 transition-transform duration-300 ease-in-out" src={linkedin} alt="linkedin svg icon" />
					</a>
					{/* <a href="#">
						<img className="w-7 hover:scale-125 transition-transform duration-300 ease-in-out" src={discord} alt="discord svg icon" />
					</a> */}
					<a className="hover-link" href="https://www.instagram.com/dev_mani25/" target="_blank">
						<img className="w-7 hover:scale-125 transition-transform duration-300 ease-in-out" src={instagram} alt="instagram svg icon" />
					</a>
					<a className="hover-link" href="https://x.com/Manikanta_425" target="_blank">
						<img className="w-7 hover:scale-125 transition-transform duration-300 ease-in-out" src={twitter} alt="twitter svg icon" />
					</a>
					<a className="hover-link" href="https://www.youtube.com/channel/UCCdkYdNdJYuyQx_ky5GTvYg" target="_blank">
						<img className="w-7 hover:scale-125 transition-transform duration-300 ease-in-out" src={youtube} alt="youtube svg icon" />
					</a>
				</div>
			</div>
			<div className="w-full relative overflow-hidden">
				<div className="w-full h-full  py-2">
					<div className="w-full h-full relative rounded-3xl overflow-hidden border-b  border-white pt-20 bg-shaded">{videoSrc ? <video src={videoSrc} autoPlay loop muted className={`w-full h-full object-cover object-center transition-opacity ${videoLoaded ? "block" : "hidden"}`} ref={videoRef} /> : <img src={bannerBackground} alt="Banner" loading="lazy" className={`w-full h-full object-cover object-center ${videoLoaded ? "hidden" : "block"}`} />}</div>
				</div>
				<div className="absolute top-12 left-1/2 -translate-x-1/2  lg:left-12 lg:-translate-x-0">
					<h3 ref={titleRef} className="text-lg sm:text-xl font-semibold text-zinc-500 text-center lg:text-start" aria-label="I am Sai Manikanta">
						I am <br />
						<span class="whitespace-nowrap">Sai Manikanta</span>
					</h3>
				</div>

				<div className="text-4xl w-full min-h-60 font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
					<ParticleText
						textGroups={[
							["MERN Stack", "Developer"],
							["Software", "Developer"],
							["UI/Ux", "Designer"],
							["Web", "Developer"],
						]}
						fontSizeMultiplier={10}
						minFontSize={48}
						maxFontSize={68}
						particleColor="#8f8f8f"
						cycleInterval={5000} // Adjust text switch interval (milliseconds)
					/>
				</div>

				<p className="absolute right-1/2 translate-x-1/2 lg:right-12 lg:translate-x-0  bottom-12 w-full max-w-[364px] font-medium text-md text-center lg:text-start" ref={textRef} aria-label="I create trend-driven, interactive websites that bring your ideas to life and transform them into unforgettable digital experiences.">
					I create trend-driven, interactive websites that bring your ideas to life and transform them into unforgettable digital experiences.
				</p>
			</div>
		</section>
	);
}

export default Hero;
