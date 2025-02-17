import miniFlicks from '../assets/projects/miniflicks.webp';
import maniDevPortfolio from '../assets/projects/portfolio.webp';
import retailPOS from '../assets/projects/pos.webp';
import f2d from '../assets/projects/f2d.webp';
import iphoneClone from '../assets/projects/iphone.webp';
import corellic from '../assets/projects/corellic.webp';
import editorify from '../assets/projects/editorify.webp'

const projects = [
   {
      title: "MiniFlicks Private Theatre Booking",
      description: "A private theatre booking platform with multi-branch admin control, real-time booking updates, automated email notifications, and a secure transaction backend.",
      link: "https://www.miniflicks.in/",
      image: miniFlicks,
   },
   {
      title: "ManiDev Portfolio",
      description: "A story-driven personal portfolio showcasing expertise in modern web development, featuring an interactive UI, smooth animations, and a performance-optimized design.",
      link: "https://www.manidev.in/",
      image: maniDevPortfolio,
   },
   {
      title: "Retail Store POS System",
      description: "A feature-rich POS system enabling streamlined billing, real-time inventory tracking, and sales analytics. Enhanced UI/UX for an intuitive experience.",
      link: "https://boutique-pos-frontend.netlify.app",
      image: retailPOS,
   },
   {
      title: "F2D (Factory to Door)",
      description: "A real-time order tracking system with dynamic animations, focusing on efficiency, user engagement, and a polished UI.",
      link: "https://factory2door.co.uk/",
      image: f2d,
   },
   {
      title: "iPhone 15 Pro Clone",
      description: "A pixel-perfect iPhone 15 Pro clone built with smooth animations and a high-performance UI, ensuring responsiveness and design accuracy.",
      link: "https://iphone-15-pro-webclone.netlify.app/",
      image: iphoneClone,
   },
   {
      title: "Corelic (Open Source Project)",
      description: "An open-source project similar to Shopify that provides backend API support for e-commerce stores, offering excellent UI and full management control.",
      link: "https://www.github.com/mani254/corelic",
      image: corellic,
   },
   {
      title: "Editorify (Open Source NPM Package)",
      description: "An NPM package offering reusable components for React applications, helping developers speed up UI development with prebuilt, customizable elements.",
      link: "https://www.npmjs.com/package/editorify-dev",
      image: editorify,
   },
];

export default projects;
