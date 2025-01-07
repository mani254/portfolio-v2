import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import mainService from "../../assets/services/main-service.webp";

function ServiceImage() {
	const imageRef = useRef(null);
	const outerRef = useRef(null);
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleLoad = () => {
		setImageLoaded(true);
	};

	useEffect(() => {
		if (!imageRef.current || !outerRef.current || !imageLoaded) return;
		const animation = gsap.fromTo(
			imageRef.current,
			{ objectPosition: "50% -250px" },
			{
				objectPosition: "50% -100px",
				scrollTrigger: {
					trigger: imageRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
				ease: "sine.out",
			}
		);

		const outerAnm = gsap.fromTo(outerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.6 });

		return () => {
			animation.kill();
			outerAnm.kill();
		};
	}, [imageRef, imageLoaded, outerRef]);

	return (
		<div className="w-full  h-[250px] md:h-[350px] bg-gray-200 rounded-2xl m-auto relative overflow-hidden" ref={outerRef}>
			<img ref={imageRef} src={mainService} alt="Developer services setup" onLoad={handleLoad} style={{ objectFit: "cover" }} className="absolute w-full h-[500px]  md:h-fullscale-[1.6] md:scale-100" />
		</div>
	);
}

export default ServiceImage;
