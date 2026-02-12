import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/swarnaraja-sekhar", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/swarna-rajasekhar", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
        { icon: <Mail size={20} />, href: "bhuchiki12@gmail.com", label: "Email" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800 relative z-10">
            <div className="container mx-auto px-6 flex flex-col items-center">

                <div className="flex gap-8 mb-8">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                            aria-label={link.label}
                        >
                            <div className="transition-transform transform hover:rotate-12 duration-300">
                                {link.icon}
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-white tracking-wide">Swarna Rajasekhar</p>
                    <p className="text-sm font-medium text-gray-500">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
