import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-4" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Brand Name */}
                <a href="#home" className="text-2xl font-bold text-gray-900 group">
                    Developer<span className="text-blue-600 group-hover:animate-pulse">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 text-sm tracking-wide uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform active:scale-95"
                        download
                    >
                        <FileText size={18} />
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full shadow-md"
                        download
                        onClick={() => setIsOpen(false)}
                    >
                        <FileText size={18} />
                        <span>Download Resume</span>
                    </a>
                </div>
            )}
        </nav>
    );
}
