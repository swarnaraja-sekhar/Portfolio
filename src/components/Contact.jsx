import React, { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted (demo only):", formData);
        alert("This is a demo. No backend connected yet!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 inline-block relative after:w-full after:h-1 after:bg-blue-600 after:absolute after:bottom-0 after:left-0 after:scale-x-50 after:origin-center hover:after:scale-x-100 transition-transform pb-2">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                        Currently open to new opportunities. Let's connect!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left Column: Contact Links */}
                    <div className="flex flex-col space-y-8 h-full bg-gray-50/50 p-8 rounded-3xl shadow-inner border border-gray-100/50">

                        <div className="contact-card group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-100">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">Email</h3>
                                <a href="mailto:bhuchiki12@gmail.com" className="text-gray-600 hover:text-blue-600 transition font-medium">
                                    bhuchiki12@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-card group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-100">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Linkedin size={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
                                <a href="https://linkedin.com/in/swarna-rajasekhar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition font-medium">
                                    linkedin.com/in/swarna-rajasekhar
                                </a>
                            </div>
                        </div>

                        <div className="contact-card group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-100">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <Github size={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">GitHub</h3>
                                <a href="https://github.com/swarnaraja-sekhar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition font-medium">
                                    github.com/swarnaraja-sekhar
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">Send a Message</h3>

                        <div className="relative z-10 space-y-2 group/input">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="relative z-10 space-y-2 group/input">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="relative z-10 space-y-2 group/input">
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                                placeholder="I'd like to discuss a project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="relative z-10 w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 focus:ring-4 focus:ring-blue-300 uppercase tracking-wide"
                        >
                            Send Message
                            <Send size={20} className="animate-pulse" />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
