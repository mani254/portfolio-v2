import React, { useState, useEffect, useRef } from "react";
// import { budgets, services, emoji, github, discord, linkedin, instagram, twitter, youtube } from "../utils";
import { budgets, services, github, linkedin, instagram, twitter, youtube } from "../utils";
import emoji from "../assets/3d-emoji-icon.png";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

import countryCodes from "../utils/countryCodes.json";

function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		phoneNo: "",
		email: "",
		description: "",
		country: "",
		service: "",
		budget: "",
	});
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	const timeoutRef = useRef(null);

	useEffect(() => {
		if (formData.country.length <= 0) {
			return setSuggestions([]);
		}
		const filteredSuggestions = countryCodes.filter((country) => country.name.toLowerCase().startsWith(formData.country.toLowerCase()));
		setSuggestions(filteredSuggestions);
	}, [formData.country]);

	useEffect(() => {
		const handleLoad = () => {
			gsap.fromTo(".bounce-image", { y: -50 }, { y: 0, duration: 0.8, ease: "bounce.out", stagger: 0.05 });
		};
		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			return () => {
				window.removeEventListener("load", handleLoad);
				gsap.killTweensOf(".bounce-image");
			};
		}
	}, []);

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function selectCountry(countryName) {
		setFormData((prev) => ({ ...prev, country: countryName }));
	}

	function handleBlur() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			setSuggestions([]);
		}, 200);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const response = await fetch("https://www.miniflicks.in/api/sendMail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			const result = await response.json();
			navigate("/thankyou");
		} catch (error) {
			console.error("Error:", error);
			window.alert("something went wrong please try again later");
		}
	}

	return (
		<div className="container max-w-[800px] py-10 sm:py-20">
			<div className="flex items-center flex-col sm:flex-row gap-1 sm:gap-3">
				<h5 className="order-2 sm:order-1">We are always Here to help</h5>
				<img className="w-14 h-14 order-1 sm:order-2 bounce-image" src={emoji} alt="welcome Emoji" />
			</div>

			<div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-5">
				<h1 className="text-center md:text-start font-semibold text-2xl">Get in touch</h1>

				<div className="flex gap-4 ">
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

			<h5 className="mt-10 sm:mt-14">What Service You are looking for?</h5>
			<div className="flex flex-wrap gap-4 mt-4">
				{services.map((value, index) => (
					<div key={index} onClick={() => setFormData((prev) => ({ ...prev, service: value }))} className={`service-button flex-list-button opacity-80 ${value === formData.service ? "bg-dark text-white" : ""}`}>
						<span className="text-xs sm:text-sm">{value}</span>
					</div>
				))}
			</div>

			<h5 className="mt-10 sm:mt-14">Your Budget (INR)</h5>
			<div className="flex flex-wrap gap-4 mt-4">
				{budgets.map((value, index) => (
					<div key={index} onClick={() => setFormData((prev) => ({ ...prev, budget: value }))} className={`budget-button flex-list-button opacity-80 ${value === formData.budget ? "bg-dark text-white transition-all" : ""}`}>
						<span className="text-xs sm:text-sm">{value}</span>
					</div>
				))}
			</div>

			<form className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
				<input type="text" className="border-b px-2 py-2 border-gray-300 outline-none" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
				<div className="relative w-full">
					<input type="text" name="country" className="w-full border-b px-2 py-2 border-gray-300 outline-none" placeholder="Your Country" value={formData.country} onChange={handleChange} onBlur={handleBlur} required />
					{suggestions.length > 0 && (
						<ul className="absolute w-full max-h-56 bg-zinc-50 shadow-md rounded-md overflow-auto">
							{suggestions.map((country, index) => (
								<li key={index} className="px-3 py-2 cursor-pointer hover:bg-zinc-200" onClick={() => selectCountry(country.name)}>
									{country.name}
								</li>
							))}
						</ul>
					)}
				</div>

				<input type="tel" className="border-b px-2 py-2 border-gray-300 outline-none" name="phoneNo" placeholder="Your Phone Number" value={formData.phoneNo} onChange={handleChange} required />
				<input type="email" className="border-b px-2 py-2 border-gray-300 outline-none" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
				<textarea name="description" className="sm:col-span-2 border-b px-2 py-2 border-gray-300 outline-none" placeholder="Project Description" onChange={handleChange} value={formData.description}></textarea>

				<div className="sm:col-span-2 inline-block move-over m-auto mt-5">
					<button type="submit" className="w-full md:w-[300px] flex-list-button">
						<span className="px-7 py-1 inline-block">Send Message</span>
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactPage;
