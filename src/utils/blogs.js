import EditorifyDevDetails from '../components/blogs/EditorifyDevDetails'
import NodemailerIntegration from '../components/blogs/NodemailerIntegration'
import MERNStackBenefits from '../components/blogs/MERNStackBenefits';
import { about1, about2, about3 } from '.';



const blogs = [
   {
      title: "EditorifyDev: My Npm package usage",
      component: EditorifyDevDetails,
      date: "Nov 18, 2024",
      description: "Discover the flexibility of EditorifyDev, an npm package I developed for building scalable and reusable UI ...",
      image: about1,
      youtubeLink: "https://www.youtube.com/watch?v=example-editorifydev",
   },
   {
      title: "How To Send Mails using NodeMailer",
      component: NodemailerIntegration,
      date: "Nov 20, 2024",
      description: "Explore how Node.js simplifies mail-sending processes with libraries like Nodemailer ...",
      image: about2,
      youtubeLink: "https://www.youtube.com/watch?v=example-nodejs-mail",
   },
   {
      title: "How To Become a web Developer Roadmap",
      component: MERNStackBenefits,
      date: "Nov 17, 2024",
      description: "The MERN stack offers a seamless development experience with a unified JavaScript ecosystem, ensuring ...",
      image: about3,
      youtubeLink: "https://www.youtube.com/watch?v=example-mernstack",
   },
];

export default blogs;