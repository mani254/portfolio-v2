import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
	const [countdown, setCountdown] = useState(10);
	const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(interval);
					navigate("/");
				}
				return prev - 1;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, [navigate]);

	return (
		<div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-6">
			<div className="text-6xl">🙏</div>
			<h1 className="text-3xl font-bold mt-4">Thank You for Reaching Out!</h1>
			<p className="mt-2 text-lg text-gray-700">We have received your message and will get back to you within 24 hours.</p>

			<div className="relative w-32 h-32 mt-6">
				<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="5" fill="none" />
					<circle cx="50" cy="50" r="45" stroke="#4CAF50" strokeWidth="5" fill="none" strokeDasharray="282.74" strokeDashoffset={(countdown / 10) * 282.74} strokeLinecap="round" />
				</svg>
				<div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-green-600">{countdown}</div>
			</div>

			<p className="mt-3 text-gray-600 text-lg">Redirecting to home page...</p>
		</div>
	);
}

export default ThankYouPage;
