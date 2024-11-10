import React from "react";

const Maintenance = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center p-6 bg-white shadow-xl rounded-lg border border-gray-300 max-w-lg w-full">
				<h1 className="text-4xl font-semibold text-red-600 mb-4">🚧 Website Under Maintenance 🚧</h1>
				<p className="text-xl text-gray-700 mb-6">We're currently making improvements. Please check back later.</p>
				<p className="text-sm text-gray-500">We apologize for the inconvenience and appreciate your patience.</p>
			</div>
		</div>
	);
};

export default Maintenance;
