import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <Github size={16} />, href: "https://github.com/swarnaraja-sekhar", label: "GitHub" },
        { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/swarna-rajasekhar", label: "LinkedIn" },
        { icon: <Mail size={16} />, href: "mailto:bhuchiki12@gmail.com", label: "Email" },
    ];

    return (
        <footer style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '4rem 0 3rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    gap: '3rem',
                    paddingBottom: '3rem',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    flexWrap: 'wrap',
                }} className="footer-main">

                    {/* Brand */}
                    <div>
                        <p style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: '1.8rem',
                            fontWeight: 500,
                            color: '#F8F5F0',
                            margin: '0 0 0.25rem',
                            letterSpacing: '-0.01em',
                        }}>Swarna Rajasekhar</p>
                        <p style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '0.62rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            color: 'rgba(248,245,240,0.35)',
                            margin: 0,
                        }}>Full Stack Developer</p>
                    </div>

                    {/* Nav links — center */}
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                    color: 'rgba(248,245,240,0.45)',
                                    textDecoration: 'none',
                                    transition: 'color 0.25s ease',
                                }}
                                onMouseEnter={e => e.target.style.color = 'rgba(248,245,240,0.9)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(248,245,240,0.45)'}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social links — right */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        {socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                style={{
                                    width: '2.25rem',
                                    height: '2.25rem',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(248,245,240,0.5)',
                                    textDecoration: 'none',
                                    transition: 'all 0.25s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = '#C4B8A8';
                                    e.currentTarget.style.color = '#C4B8A8';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                                    e.currentTarget.style.color = 'rgba(248,245,240,0.5)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '2rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '0.65rem',
                        color: 'rgba(248,245,240,0.25)',
                        margin: 0,
                        letterSpacing: '0.05em',
                    }}>
                        © {new Date().getFullYear()} Swarna Rajasekhar. All rights reserved.
                    </p>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '0.65rem',
                        color: 'rgba(248,245,240,0.25)',
                        margin: 0,
                        letterSpacing: '0.05em',
                    }}>
                        Built with React · MERN Stack
                    </p>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer-main {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                    }
                    .footer-main > div:last-child { justify-content: center !important; }
                }
            `}</style>
        </footer>
    );
}
