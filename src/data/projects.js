import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import flutter from "../assets/icons/flutter.png";
import ugcdatabase from "../assets/projects/ugcdatabase.png";
import berrly from "../assets/projects/berrly.png";
import bovidata from "../assets/projects/bovidata.png";
import keepassux from "../assets/projects/keepassux.png";
import portfolio from "../assets/projects/portfolio.png";
import nextjs from "../assets/icons/nextjs.png";
import javascript from "../assets/icons/javascript.png";
import firebase from "../assets/icons/firebase.png";
import react from "../assets/icons/react.png";

export const projects = [
    {
        slug: "keepassux",
        image: keepassux,
        openSource: true,
        technologies: [flutter],
        githubUrl: "https://github.com/LittleEmber13/keepassUX",
    },
    {
        slug: "portfolio",
        image: portfolio,
        openSource: true,
        technologies: [react, javascript, framerMotion, tailwind],
        githubUrl: "https://github.com/LittleEmber13/portfolio-2025",
    },
    {
        slug: "ugc_database",
        image: ugcdatabase,
        openSource: false,
        technologies: [typescript, nextjs, tailwind],
    },
    {
        slug: "berrly",
        image: berrly,
        openSource: false,
        technologies: [flutter],
        websiteUrl: "https://www.berrly.com/es/",
    },
    {
        slug: "bovidata",
        image: bovidata,
        openSource: false,
        technologies: [flutter, firebase],
        websiteUrl: "https://bovidata.com/",
    },
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}
