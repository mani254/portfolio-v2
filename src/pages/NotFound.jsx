import React from "react";

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center p-8 max-w-xl w-full">
				<h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
				<p className="text-xl text-gray-700 mb-4">Oops! The page you're looking for doesn't exist.</p>
				<p className="text-sm text-gray-500 mb-6">It might have been moved or deleted. Please check the URL and try again.</p>
				<a href="/" className="text-white bg-violet-500 hover:bg-violet-600 px-6 py-2 rounded-md text-md font-semibold transition duration-200">
					Go Back Home
				</a>
			</div>
		</div>
	);
};

export default NotFound;
