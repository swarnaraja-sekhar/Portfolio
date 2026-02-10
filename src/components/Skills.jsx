import React from "react";
import { Code, Database, Globe, Wrench } from "lucide-react";

export default function Skills() {
    const allSkills = [
        {
            category: "Frontend",
            icon: <Globe size={24} className="text-blue-600" />,
            skills: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "Bootstrap"],
            color: "blue"
        },
        {
            category: "Backend",
            icon: <Code size={24} className="text-green-600" />,
            skills: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT)", "GraphQL"],
            color: "green"
        },
        {
            category: "Database",
            icon: <Database size={24} className="text-purple-600" />,
            skills: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Sequelize"],
            color: "purple"
        },
        {
            category: "Tools & DevOps",
            icon: <Wrench size={24} className="text-orange-600" />,
            skills: ["Git & GitHub", "Docker", "VS Code", "Postman", "Vite", "Netlify/Vercel"],
            color: "orange"
        },
    ];

    return (
        <section id="skills" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-sm"></div>
                    <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-light">
                        A solid grasp of the full stack development ecosystem, constantly expanding my toolkit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {allSkills.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4 group-hover:border-blue-50 transition-colors">
                                <div className={`p-3 bg-${category.color}-50 text-${category.color}-600 rounded-xl group-hover:bg-${category.color}-100 transition-colors`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-default shadow-sm hover:shadow-md"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
