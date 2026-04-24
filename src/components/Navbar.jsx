import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Experience", href: "/#experience" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 50,
                transition: 'all 0.4s ease',
                backgroundColor: isScrolled ? 'rgba(248, 245, 240, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(13,13,13,0.08)' : '1px solid rgba(255,255,255,0.1)',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
            }}
        >
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Brand */}
                <a href="#home" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                    <span style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: isScrolled ? '#0D0D0D' : '#F8F5F0',
                        letterSpacing: '0.02em',
                        transition: 'color 0.4s ease'
                    }}>
                        Swarna
                    </span>
                    <span style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '0.6rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        color: isScrolled ? '#7A7068' : 'rgba(248,245,240,0.6)',
                        transition: 'color 0.4s ease'
                    }}>
                        Full Stack Developer
                    </span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontSize: '0.68rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                color: isScrolled ? '#0D0D0D' : '#F8F5F0',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                                opacity: 0.8,
                            }}
                            onMouseEnter={e => e.target.style.opacity = 1}
                            onMouseLeave={e => e.target.style.opacity = 0.8}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={isScrolled ? "btn-pill-dark" : "btn-pill-light"}
                        style={{ fontSize: '0.62rem', padding: '0.6rem 1.5rem' }}
                    >
                        View Resume
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: isScrolled ? '#0D0D0D' : '#F8F5F0',
                        padding: '0.5rem',
                        transition: 'color 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    className="nav-mobile-btn"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    backgroundColor: '#F8F5F0',
                    borderTop: '1px solid rgba(13,13,13,0.08)',
                    padding: '2rem 2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontSize: '0.75rem',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                color: '#0D0D0D',
                                textDecoration: 'none',
                                paddingBottom: '1rem',
                                borderBottom: '1px solid rgba(13,13,13,0.07)',
                                transition: 'color 0.2s ease',
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="btn-pill-dark"
                        style={{ alignSelf: 'flex-start', marginTop: '0.5rem', fontSize: '0.62rem' }}
                    >
                        View Resume
                    </a>
                </div>
            )}

            <style>{`
                @media (min-width: 768px) {
                    .nav-desktop { display: flex !important; }
                    .nav-mobile-btn { display: none !important; }
                }
            `}</style>
        </nav>
    );
}
