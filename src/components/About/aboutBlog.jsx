import React from "react";
import blogs from "../../utils/blogs";

import { FaArrowRightLong } from "react-icons/fa6";

function AboutBlog() {
	return (
		<section className="about-section">
			<div className="flex flex-col md:flex-row  gap-6 mb-10">
				{blogs.map((blog, index) => {
					return (
						<div className="about-part p-0 w-full lg:w-1/3 overflow-hidden relative group hover:shadow-xl">
							<div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
								<img className="absolute w-full h-full object-cover object-center" src={blog.image} alt={blog.title}></img>
							</div>
							<div className="px-6 mt-4 pb-6">
								<h2 className="text-sm">{blog.title}</h2>
								<p className="text-xs mt-4">{blog.description}</p>
							</div>
							<div className=" bg-gray-500 rounded-lg absolute top-3 right-3 flex items-center justify-center shadow-md group-hover:scale-105 transition-all gap-2 px-2 py-1">
								<p className="text-white text-xs">Read Blog</p>
								<div className="-rotate-45 cursor-pointer">
									<FaArrowRightLong className="fill-white"></FaArrowRightLong>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default AboutBlog;
