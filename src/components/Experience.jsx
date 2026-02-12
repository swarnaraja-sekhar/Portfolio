import React from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Frontend Developer Intern",
            company: "Cognetix Technologies",
            duration: "Jan 2026 - Feb 2026",
            description:
                "Completed an intensive Full Stack Web Development internship, delivering production-ready MERN stack projects with secure authentication, REST APIs, and responsive user interfaces.",
        },
        {
            title: "Full Stack Developer Trainee",
            company: "PentechAI Solutions",
            duration: "Jul 2025 - Sep 2025",
            description:
                "Completed intensive training in MERN stack development. built several full-stack projects including a blog platform and a chat application.",
        },
        {
            title: "Computer Science and Engineering",
            company: "Rajiv Gandhi University Of Knowledge Technologies, Ongole",
            duration: "2023 - 2027",
            description:
                "Graduated with honors. Focused on Software Engineering, Data Structures, and Algorithms. Led the university coding club.",
        },
    ];

    return (
        <section id="experience" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Experience & Education</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-sm"></div>
                </div>

                <div className="relative border-l-2 border-blue-200 ml-4 md:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-1.5 -left-[9px] w-5 h-5 bg-white border-4 border-blue-600 rounded-full group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300 shadow-md"></div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-100">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{exp.title}</h3>
                                        <h4 className="text-lg text-gray-600 font-medium">{exp.company}</h4>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                                        <Calendar size={16} />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
