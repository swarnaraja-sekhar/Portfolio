import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, product management, cart functionality, and secure payment integration.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        link: "https://example.com",
        github: "https://github.com",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager allowing users to create boards, lists, and cards with real-time updates and drag-and-drop support.",
        techStack: ["React", "Socket.io", "Node.js", "PostgreSQL"],
        link: "https://example.com",
        github: "https://github.com",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    },
    {
        title: "Social Media Dashboard",
        description: "An analytics dashboard for tracking social media performance, visualizing data with charts and providing actionable insights.",
        techStack: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
        link: "https://example.com",
        github: "https://github.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
        title: "Weather Forecast App",
        description: "A sleek weather application providing real-time forecasts, location detection, and detailed meteorological data using external APIs.",
        techStack: ["React", "OpenWeather API", "CSS Modules"],
        link: "https://example.com",
        github: "https://github.com",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
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
