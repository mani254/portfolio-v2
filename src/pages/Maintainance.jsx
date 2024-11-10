import React from "react";

const Maintenance = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center p-6  rounded-lg  max-w-2xl w-full">
				<h1>🚧</h1>
				<h1 className="text-3xl font-semibold text-red-600 mb-4"> Website Under Maintenance</h1>
				<p className="text-xl text-gray-700 mb-6">We're currently making improvements. Please check back later.</p>
				<p className="text-sm text-gray-500">We apologize for the inconvenience and appreciate your patience.</p>
			</div>
		</div>
	);
};

export default Maintenance;
