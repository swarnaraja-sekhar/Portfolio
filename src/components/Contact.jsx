import React, { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        );
        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach(el => observer.observe(el));
        return () => reveals.forEach(el => observer.unobserve(el));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp message
        const whatsappNumber = "919391774388";
        const text = `*New Portfolio Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setFormData({ name: "", email: "", message: "" });
    };

    const contactItems = [
        {
            icon: <Mail size={18} />,
            label: "Email",
            value: "bhuchiki12@gmail.com",
            href: "mailto:bhuchiki12@gmail.com",
        },
        {
            icon: <Linkedin size={18} />,
            label: "LinkedIn",
            value: "swarna-rajasekhar",
            href: "https://linkedin.com/in/swarna-rajasekhar",
        },
        {
            icon: <Phone size={18} />,
            label: "Phone",
            value: "+91 9391774388",
            href: "tel:+919391774388",
        },
        {
            icon: <Github size={18} />,
            label: "GitHub",
            value: "swarnaraja-sekhar",
            href: "https://github.com/swarnaraja-sekhar",
        },
    ];

    const inputStyle = {
        width: '100%',
        padding: '1rem 0',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        color: '#F8F5F0',
        fontFamily: "'Manrope', sans-serif",
        fontSize: '0.9rem',
        fontWeight: 300,
        outline: 'none',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        fontFamily: "'Manrope', sans-serif",
        fontSize: '0.6rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: 'rgba(248,245,240,0.4)',
        display: 'block',
        marginBottom: '0.25rem',
    };

    return (
        <section id="contact" ref={sectionRef} style={{ backgroundColor: '#1A2E2A', padding: '8rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>

                {/* Header */}
                <div className="reveal" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '1.5rem',
                    marginBottom: '5rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="label-tag-light">( 05 )</span>
                        <span className="label-tag-light">Contact</span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#F8F5F0',
                        margin: 0,
                        letterSpacing: '-0.02em',
                        fontStyle: 'italic',
                    }}>
                        Get In Touch
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8rem',
                    alignItems: 'flex-start',
                }} className="contact-grid">

                    {/* Left: CTA + contacts */}
                    <div className="reveal">
                        <h3 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            fontWeight: 400,
                            lineHeight: 1.2,
                            color: '#F8F5F0',
                            margin: '0 0 1.5rem',
                            letterSpacing: '-0.01em',
                        }}>
                            Currently open to new opportunities.
                            <span style={{ fontStyle: 'italic', fontWeight: 300 }}> Let's connect.</span>
                        </h3>
                        <p style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '0.9rem',
                            lineHeight: 1.8,
                            color: 'rgba(248,245,240,0.5)',
                            fontWeight: 300,
                            margin: '0 0 3rem',
                        }}>
                            Whether you have a project in mind, a question, or just want to say hello — I'd love to hear from you.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {contactItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.25rem',
                                        padding: '1.25rem 1.5rem',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '2px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: 'transparent',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(196,184,168,0.4)';
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <span style={{ color: '#C4B8A8', display: 'flex' }}>{item.icon}</span>
                                    <div>
                                        <p style={{
                                            fontFamily: "'Manrope', sans-serif",
                                            fontSize: '0.6rem',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                            color: 'rgba(248,245,240,0.35)',
                                            margin: '0 0 0.2rem',
                                        }}>{item.label}</p>
                                        <p style={{
                                            fontFamily: "'Manrope', sans-serif",
                                            fontSize: '0.85rem',
                                            fontWeight: 400,
                                            color: 'rgba(248,245,240,0.8)',
                                            margin: 0,
                                        }}>{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form onSubmit={handleSubmit} className="reveal" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2.5rem',
                    }}>
                        <p style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '0.7rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            color: 'rgba(248,245,240,0.35)',
                            margin: 0,
                        }}>— Send a Message</p>

                        <div>
                            <label htmlFor="name" style={labelStyle}>Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                style={inputStyle}
                                onFocus={e => e.target.style.borderBottomColor = '#C4B8A8'}
                                onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={labelStyle}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                                style={inputStyle}
                                onFocus={e => e.target.style.borderBottomColor = '#C4B8A8'}
                                onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={labelStyle}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="I'd like to discuss a project..."
                                style={{ ...inputStyle, resize: 'none', lineHeight: 1.8 }}
                                onFocus={e => e.target.style.borderBottomColor = '#C4B8A8'}
                                onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="btn-pill-light"
                                style={{ alignSelf: 'flex-start' }}
                            >
                                {sent ? "Message Sent ✓" : <>Send Message <Send size={14} /></>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
