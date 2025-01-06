import React, { useRef } from "react";
import BreadCrumb from "../components/Utils/BreadCrumb";
import ServiceImage from "../components/Services/ServiceImage";
import ScrollingServices from "../components/Services/ScrollingServices";

function ServicesPage() {
	const servicePageRef = useRef(null);

	return (
		<div ref={servicePageRef}>
			<div className="max-w-6xl m-auto">
				<BreadCrumb title="Turning Your Vision into Real, Results-Driven Solutions with Exceptional Quality" subtitle="What I Offer" />
				<ServiceImage />
			</div>
			<div className="mt-[150px]">
				<ScrollingServices mainPage={servicePageRef} />
			</div>
		</div>
	);
}

export default ServicesPage;
