import React from "react";
import { hi, profile } from "../../utils";

function MainAbout() {
	return (
		<section className="about-section flex flex-col  lg:flex-row  gap-6 mt-10">
			<div className="about-part  w-full lg:w-[40%] relative order-2 h-72">
				<img className="absolute object-contain object-center w-full h-full  top-0 left-0" src={profile} alt="manikanta profile image manidev" />
			</div>
			<div className="about-part  w-full lg:w-[60%] order-1">
				<div className="flex items-center gap-2 ">
					<img className="w-12" src={hi} alt="Hand Wave Hi png image" />
					<h2 className="text-opacity-50">Hi</h2>
				</div>

				<div className="space-y-2 mt-3 ">
					<h2> I’m Sai Manikanta More a Product Designer from New York</h2>
					<p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatibus autem impedit voluptas tempora atque nemo incidunt aperiam quibusdam, obcaecati recusandae nobis.</p>
				</div>
			</div>
		</section>
	);
}

export default MainAbout;
