import React, { useRef, useEffect, useState } from "react";

class Particle {
	constructor(x, y, particleColor) {
		this.originX = x;
		this.originY = y;
		this.x = Math.random() * window.innerWidth;
		this.y = Math.random() * window.innerHeight;
		this.color = particleColor;
		this.size = 1;
		this.vx = Math.random() * 2 - 1;
		this.vy = Math.random() * 2 - 1;
		this.friction = 0.6;
	}
	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 1.2);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	update(ctx) {
		this.vx += (this.originX - this.x) * 0.06;
		this.vy += (this.originY - this.y) * 0.06;
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.x += this.vx;
		this.y += this.vy;
		this.draw(ctx);
	}
	distort(x, y) {
		const dx = this.x - x;
		const dy = this.y - y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance < 30) {
			const angle = Math.atan2(dy, dx);
			this.x += Math.cos(angle) * 30;
			this.y += Math.sin(angle) * 30;
		}
	}
}

const ParticleText = ({
	textGroups = [
		["MERN Stack", "Developer"],
		["Graphics", "Designer"],
		["Full-Stack", "Engineer"],
	],
	fontSizeMultiplier = 8,
	minFontSize = 65,
	maxFontSize = 190,
	particleColor = "#FFFFFF",
	cycleInterval = 3000,
}) => {
	const canvasRef = useRef(null);
	const particlesRef = useRef([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const getFontSize = (width) => {
		const baseSize = width / fontSizeMultiplier;
		return Math.min(Math.max(baseSize, minFontSize), maxFontSize);
	};

	const createParticles = (canvas, textLines) => {
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		particlesRef.current = []; // Clear all particles before recalculating

		const fontSize = getFontSize(canvas.width);
		ctx.font = `bold ${fontSize}px Arial`;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "white";

		const lineHeight = fontSize * 1.2;
		const totalHeight = textLines.length * lineHeight;
		const startY = (canvas.height - totalHeight) / 2 + lineHeight / 2;

		textLines.forEach((line, index) => {
			const y = startY + index * lineHeight;
			ctx.fillText(line, canvas.width / 2, y);
		});

		const textData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
		const particles = [];
		for (let y = 0; y < canvas.height; y += 2) {
			for (let x = 0; x < canvas.width; x += 2) {
				const index = (y * canvas.width + x) * 4;
				if (textData[index + 3] > 128) {
					particles.push(new Particle(x, y, particleColor));
				}
			}
		}

		particlesRef.current = particles;
	};

	const animationRef = useRef(null);
	const animateParticles = (canvas) => {
		const ctx = canvas.getContext("2d");

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			particlesRef.current.forEach((particle) => particle.update(ctx));
			animationRef.current = requestAnimationFrame(animate);
		};

		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current);
		}
		animate();
	};
	useEffect(() => {
		const canvas = canvasRef.current;
		const parent = canvas.parentElement;

		const resizeCanvas = () => {
			canvas.width = parent.offsetWidth;
			canvas.height = parent.offsetHeight;
			particlesRef.current = [];
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			createParticles(canvas, textGroups[currentIndex]);
			animateParticles(canvas);
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const handleMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;
			particlesRef.current.forEach((particle) => particle.distort(mouseX, mouseY));
		};
		canvas.addEventListener("mousemove", handleMouseMove);

		const cycleText = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % textGroups.length);
		}, cycleInterval);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			canvas.removeEventListener("mousemove", handleMouseMove);
			clearInterval(cycleText);

			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}

			particlesRef.current = [];
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		};
		// }, [currentIndex, textGroups, fontSizeMultiplier, minFontSize, maxFontSize, particleColor, cycleInterval]);
	}, [currentIndex]);

	return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default ParticleText;
