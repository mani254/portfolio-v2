import { about1, about2, about3, about4, about5, about6 } from ".";

import service1 from "../assets/services/web-development.png";
import service2 from "../assets/services/web-design.png";
import service3 from "../assets/services/seo-service.png";
import service4 from "../assets/services/graphic-design.png";
import service5 from "../assets/services/app-development.png";

const services = [
   {
      id: "web-development",
      title: "Web Development",
      subTitle: "Fast, Scalable, and Reliable Websites",
      description: "We build fast, scalable websites using modern frameworks, ensuring smooth performance and an excellent user experience across all devices.",
      image: service1,
      backgroundColor: "#F8BBD0",
      boxColor: "#F48FB1",
      cursorColor: "#E91E63",
      boxShadow: "0px 10px 28px rgba(233, 30, 99, 0.5)",
   },
   {
      id: "web-design",
      title: "Web Design",
      subTitle: "Creative, Modern, and User-Friendly Designs",
      description: "We craft stunning, user-friendly designs that enhance engagement, ensuring an intuitive and visually appealing digital presence for your brand.",
      image: service2,
      backgroundColor: "#D1C4E9",
      boxColor: "#9575CD",
      cursorColor: "#673AB7",
      boxShadow: "0px 10px 28px rgba(103, 58, 183, 0.5)",
   },
   {
      id: "seo-services",
      title: "SEO Services",
      subTitle: "Increase Traffic and Improve Rankings",
      description: "We optimize your website with advanced SEO strategies, improving search engine rankings, increasing visibility, and driving targeted traffic to your business.",
      image: service3,
      backgroundColor: "#FFCC80",
      boxColor: "#FFB74D",
      cursorColor: "#F57C00",
      boxShadow: "0px 10px 28px rgba(245, 124, 0, 0.5)",
   },
   {
      id: "graphic-design",
      title: "Graphic Design",
      subTitle: "Unique, Engaging, and Impactful Designs",
      description: "We create stunning visuals, logos, and branding materials that capture attention, effectively representing your brand’s identity with creative designs.",
      image: service4,
      backgroundColor: "#E1BEE7",
      boxColor: "#CE93D8",
      cursorColor: "#8E24AA",
      boxShadow: "0px 10px 28px rgba(142, 36, 170, 0.5)",
   },
   {
      id: "app-development",
      title: "App Development",
      subTitle: "High-Performance, Secure, and Scalable Apps",
      description: "We build secure, high-performance mobile apps with seamless user experiences, ensuring cross-platform compatibility and robust functionality for businesses.",
      image: service5,
      backgroundColor: "#BBDEFB",
      boxColor: "#64B5F6",
      cursorColor: "#1E88E5",
      boxShadow: "0px 10px 28px rgba(30, 136, 229, 0.5)",
   },
];

export default services;
