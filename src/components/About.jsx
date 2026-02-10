import React from "react";
import { User, Code, Briefcase } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 inline-block relative after:w-full after:h-1 after:bg-blue-600 after:absolute after:bottom-0 after:left-0 after:scale-x-50 after:origin-center after:transition-transform hover:after:scale-x-100 pb-2">
                        About Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg tracking-wide font-light">
                        <p>
                            I am a dedicated <strong className="text-blue-600 font-semibold">Full Stack Developer</strong> with a strong foundation in modern web technologies. My journey involves translating complex requirements into seamless, user-friendly applications.
                        </p>
                        <p>
                            With hands-on experience in the <strong className="text-blue-600 font-semibold">MERN stack</strong>, I focus on building scalable backend systems and intuitive frontend interfaces. I enjoy solving real-world problems through clean code and efficient architecture.
                        </p>
                        <p>
                            Whether it's developing a new feature or optimizing performance, I bring a detail-oriented approach to every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-blue-50/50">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg shadow-sm">
                                <Code size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Clean Code</h3>
                                <p className="text-gray-500 text-sm md:text-base">
                                    Writing maintainable, readable, and reusable code is my priority.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-green-50/50">
                            <div className="p-3 bg-green-100 text-green-600 rounded-lg shadow-sm">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Project Focused</h3>
                                <p className="text-gray-500 text-sm md:text-base">
                                    Experience delivering robust solutions for real-world scenarios.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:bg-purple-50/50">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg shadow-sm">
                                <User size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">User Centric</h3>
                                <p className="text-gray-500 text-sm md:text-base">
                                    Designing with the end-user in mind to ensure great UX.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
