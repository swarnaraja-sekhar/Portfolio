import React from "react";
import { ExternalLink, Github } from "lucide-react";
import eshikshanImg from "../assets/eshikshan.png";

const projects = [
    {
        title: "E-Shikshan ",
        description: "A MERN-based smart education platform with course enrollment, interactive roadmaps, learning resources, hackathons, resume tools, and role-based dashboards for students, instructors, and admins.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Render", "Vercel"],
        link: "https://e-shikshan.vercel.app/",
        github: "https://github.com/Aravind210193/E-Shikshan.git",
        image: eshikshanImg,
    },
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, product management, cart functionality, and secure payment integration.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        link: "https://cognetix-ecommerce.vercel.app/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Ecommerce.git",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
        title: "Online Food Ordering App",
        description: "A seamless food ordering platform offering menu browsing, cart management, and real-time order tracking.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        link: "https://cognetix-food-ordering.vercel.app/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Food_Ordering.git",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    },
    {
        title: "Job Portal",
        description: "A comprehensive job board connecting employers and seekers, featuring resume uploads, job posting, and application tracking.",
        techStack: ["MERN Stack", "JWT", "Tailwind CSS"],
        link: "https://cognetix-job-portal.vercel.app/register",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Job_portal.git",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    },
    {
        title: "Blog Management System",
        description: "A content management system allowing users to create, edit, and publish blogs with rich text editing and comment sections.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://cognetix-blog-management-system.vercel.app/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Blog_Management__System.git",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
    {
        title: "Online Recipe Sharing",
        description: "A community platform for food lovers to share and discover recipes, complete with ingredients lists and cooking instructions.",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        link: "https://cognetix-recipe-sharing-platform.vercel.app/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Recipe_Sharing_Platform.git",
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80",
    },
    {
        title: "Notes Application",
        description: "A clean and efficient note-taking app supporting organization, tagging, and local storage for quick access.",
        techStack: ["React", "LocalStorage", "CSS Modules"],
        link: "https://cognetix-notes-application.vercel.app/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Note_Application.git",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
    },
    {
        title: "Expense Tracker",
        description: "A personal finance tool to track income and expenses, visualizing spending habits through dynamic charts.",
        techStack: ["React", "Chart.js", "Context API"],
        link: "https://swarnaraja-sekhar.github.io/Cognetix_Expense-Tracker/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Expense-Tracker.git",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
    {
        title: "Product Landing Page",
        description: "A high-conversion landing page featuring modern design, responsive layout, and clear call-to-action sections.",
        techStack: ["React", "Framer Motion", "Tailwind CSS"],
        link: "https://swarnaraja-sekhar.github.io/Cognetix_Product_Landing_Page/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Product_Landing_Page.git",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
    {
        title: "Weather Forecasting App",
        description: "A real-time weather dashboard providing current conditions, 5-day forecasts, and location-based weather updates.",
        techStack: ["React", "OpenWeather API", "CSS Modules"],
        link: "https://swarnaraja-sekhar.github.io/Cognetix_Weather_App/",
        github: "https://github.com/swarnaraja-sekhar/Cognetix_Weather_App.git",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    },
    {
        title: "BeyondChats Article Management System",
        description: "Full-stack article management system that scrapes blog content, enhances it using AI, and delivers optimized articles through a responsive React interface with a scalable Express–MongoDB backend.",
        techStack: ["React", "Express", "MongoDB", "AI Integration", "Web Scraping"],
        link: "https://beyond-chats-assignment-theta.vercel.app/",
        github: "https://github.com/swarnaraja-sekhar/BeyondChats_Assignment.git",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-sm"></div>
                    <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-light">
                        A selection of projects that demonstrate my technical expertise and problem-solving abilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full relative"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-transform duration-300 transform scale-0 group-hover:scale-100 delay-100 shadow-xl"
                                        title="View Live"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-transform duration-300 transform scale-0 group-hover:scale-100 delay-200 shadow-xl"
                                        title="View Code"
                                    >
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow text-base leading-relaxed font-light">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-semibold px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-gray-100 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wider"
                                    >
                                        <Github size={16} /> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
