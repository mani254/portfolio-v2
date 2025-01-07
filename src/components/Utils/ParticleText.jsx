import React, { useRef, useEffect } from "react";

// Particle class (moved outside the component)
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
		this.vx += (this.originX - this.x) * 0.02;
		this.vy += (this.originY - this.y) * 0.02;
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

const ParticleText = ({ textLines = ["MERN Stack", "Developer"], fontSizeMultiplier = 8, minFontSize = 65, maxFontSize = 190, particleColor = "#FFFFFF" }) => {
	const canvasRef = useRef(null);
	const particlesRef = useRef([]); // Store particles in a ref to persist across renders

	// Adjust font size dynamically based on parent dimensions
	const getFontSize = (width) => {
		const baseSize = width / fontSizeMultiplier;
		if (baseSize < maxFontSize && baseSize > minFontSize) {
			return baseSize;
		} else if (baseSize > maxFontSize) {
			return maxFontSize;
		} else {
			return minFontSize;
		}
	};

	const createParticles = (canvas) => {
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const fontSize = getFontSize(canvas.width);
		ctx.font = `bold ${fontSize}px Arial`;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "white";

		const lineHeight = fontSize * 1.2;
		const totalHeight = textLines.length * lineHeight;
		const startY = (canvas.height - totalHeight) / 2 + lineHeight / 2;

		// Draw text lines
		textLines.forEach((line, index) => {
			const y = startY + index * lineHeight;
			ctx.fillText(line, canvas.width / 2, y);
		});

		const textData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

		// Create particles with reduced spacing for higher density
		const particles = [];
		for (let y = 0; y < canvas.height; y += 2) {
			for (let x = 0; x < canvas.width; x += 2) {
				const index = (y * canvas.width + x) * 4;
				if (textData[index + 3] > 128) {
					particles.push(new Particle(x, y, particleColor));
				}
			}
		}

		particlesRef.current = particles; // Update particles reference
	};

	const animateParticles = (canvas) => {
		const ctx = canvas.getContext("2d");

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particlesRef.current.forEach((particle) => particle.update(ctx));

			requestAnimationFrame(animate);
		};

		animate();
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const parent = canvas.parentElement;

		const resizeCanvas = () => {
			// Clear canvas and particles
			canvas.width = parent.offsetWidth;
			canvas.height = parent.offsetHeight;

			particlesRef.current = []; // Clear particles
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

			createParticles(canvas); // Redraw everything
			animateParticles(canvas); // Restart animation
		};

		// Initial setup
		resizeCanvas();

		// Add resize listener
		window.addEventListener("resize", resizeCanvas);

		const handleMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;

			particlesRef.current.forEach((particle) => particle.distort(mouseX, mouseY));
		};

		// Add mousemove listener
		canvas.addEventListener("mousemove", handleMouseMove);

		return () => {
			// Cleanup: Remove listeners and clear canvas
			window.removeEventListener("resize", resizeCanvas);
			canvas.removeEventListener("mousemove", handleMouseMove);

			particlesRef.current = []; // Clear particles
			const ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
		};
	}, [textLines, fontSizeMultiplier, minFontSize, maxFontSize, particleColor]);

	return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default ParticleText;
