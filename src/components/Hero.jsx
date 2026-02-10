import React from "react";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* Left Content */}
                <div className="space-y-6 text-center md:text-left z-20 animate-fade-in-up">
                    <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm md:text-base">
                        Hello, I am
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                        Swarna Rajasekhar
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
                        Full Stack Developer <span className="text-blue-600 px-2">|</span> MERN Stack
                    </h2>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                        I build scalable, clean, and user-centric web applications. Passionate about creating seamless digital experiences with modern technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-4 focus:ring-blue-300"
                        >
                            View Projects
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-300 transition shadow-sm hover:shadow-md focus:ring-4 focus:ring-gray-100"
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Content - Abstract Shape / Illustration */}
                <div className="relative flex justify-center md:justify-end animate-fade-in-left">
                    <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] group">
                        {/* Abstract Background Blotches with Tailwind Animations */}
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

                        {/* Profile Image Container */}
                        <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                            <img
                                src={profileImg}
                                alt="Swarna Rajasekhar"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>

                    </div>
                </div>

            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
            </div>
        </section>
    );
}
