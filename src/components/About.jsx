import React, { useEffect, useRef } from "react";
import profileImg from "../assets/profile.jpg";

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if(e.isIntersecting) {
                    e.target.classList.add('visible');
                }
            }),
            { threshold: 0.15 }
        );
        const reveals = sectionRef.current?.querySelectorAll('.reveal') ?? [];
        reveals.forEach(el => observer.observe(el));
        return () => reveals.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <section id="about" ref={sectionRef} style={{ backgroundColor: '#F8F5F0', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
                
                {/* Header */}
                <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span className="label-tag">( 01 )</span>
                    <span className="label-tag">About</span>
                </div>

                {/* Main Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '55% 45%',
                    gap: '4rem',
                    alignItems: 'center',
                }} className="about-grid">

                    {/* Left: Text Content */}
                    <div className="reveal" style={{ paddingRight: '2rem' }}>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 'clamp(3rem, 5vw, 4.8rem)',
                            fontWeight: 400,
                            color: '#0D0D0D',
                            margin: '0 0 2rem',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.05,
                            textTransform: 'uppercase'
                        }}>
                            Crafting digital <br/><i style={{ color: '#1A2E2A', fontWeight: 300 }}>experiences</i> <br/>with precision.
                        </h2>
                        
                        <div style={{ width: '60px', height: '1px', backgroundColor: '#0D0D0D', marginBottom: '2.5rem', opacity: 0.3 }} />

                        <p style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '1.05rem',
                            lineHeight: 1.9,
                            color: '#5A5248',
                            fontWeight: 300,
                            marginBottom: '1.5rem',
                            maxWidth: '520px'
                        }}>
                            I am a dedicated <strong style={{ color: '#0D0D0D', fontWeight: 500 }}>Full Stack & SaaS Developer</strong> with a strong foundation in modern web technologies. My journey involves translating complex business requirements into seamless, high-performance applications, with a recent focus on scalable SaaS platforms during my time at <strong style={{ color: '#0D0D0D', fontWeight: 500 }}>OnlyUsMedia</strong>.
                        </p>

                        <p style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '1.05rem',
                            lineHeight: 1.9,
                            color: '#5A5248',
                            fontWeight: 300,
                            marginBottom: '3rem',
                            maxWidth: '520px'
                        }}>
                            With hands-on experience across the entire development lifecycle, I focus on building scalable backend systems and intuitive frontend interfaces. I enjoy solving real-world problems through clean code and efficient architecture.
                        </p>

                        <a href="#projects" className="btn-pill-dark">
                            View My Work
                        </a>
                    </div>

                    {/* Right: Image Composition */}
                    <div className="reveal" style={{ position: 'relative', padding: '2rem 0' }}>
                        {/* Decorative background box */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: '5%',
                            width: '80%',
                            height: '95%',
                            backgroundColor: '#EBE5D9', // slightly darker cream
                            zIndex: 0,
                            border: '1px solid rgba(13,13,13,0.05)'
                        }} />
                        
                        {/* Main Image */}
                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            aspectRatio: '3/4',
                            width: '85%',
                            margin: '0 auto',
                            overflow: 'hidden',
                        }}>
                            <img
                                src="/RajaSe.jpeg"
                                alt="Swarna Rajasekhar"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center top',
                                    filter: 'grayscale(15%) contrast(105%)',
                                    transition: 'transform 0.8s ease',
                                    willChange: 'transform'
                                }}
                                className="about-img-hover"
                            />
                        </div>

                        {/* Floating Stats/Badge */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '-2rem',
                            backgroundColor: '#0D0D0D',
                            color: '#F8F5F0',
                            padding: '1.5rem 2.5rem',
                            zIndex: 2,
                            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            border: '1px solid rgba(196,184,168,0.2)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C4B8A8', boxShadow: '0 0 10px #C4B8A8' }} />
                                <span style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: '#C4B8A8',
                                    fontWeight: 700
                                }}>Specialist</span>
                            </div>
                            <span style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: '1.2rem',
                                letterSpacing: '0.02em',
                                color: '#F8F5F0',
                                fontWeight: 400,
                                fontStyle: 'italic'
                            }}>Full Stack & SaaS Developer</span>
                        </div>
                    </div>
                </div>

                <div className="reveal traits-grid" style={{
                    marginTop: '4rem',
                    borderTop: '1px solid rgba(13,13,13,0.1)',
                    borderBottom: '1px solid rgba(13,13,13,0.1)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                }}>
                    {[
                        { num: '01', title: 'Clean Architecture', desc: 'Building scalable systems that are maintainable and reusable by design.' },
                        { num: '02', title: 'Performance Focused', desc: 'Delivering robust, lightning-fast real-world solutions.' },
                        { num: '03', title: 'User Centric', desc: 'Designing intuitive interfaces for outstanding user experiences.' },
                    ].map((trait, i) => (
                        <div key={i} style={{
                            padding: '2.5rem 2rem',
                            borderRight: i !== 2 ? '1px solid rgba(13,13,13,0.1)' : 'none',
                        }} className="trait-cell">
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#C4B8A8', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                ({trait.num})
                            </div>
                            <h4 style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: '1.75rem',
                                fontWeight: 400,
                                color: '#0D0D0D',
                                marginBottom: '1rem',
                                letterSpacing: '-0.01em',
                                textTransform: 'uppercase'
                            }}>{trait.title}</h4>
                            <p style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontSize: '0.9rem',
                                lineHeight: 1.8,
                                color: '#7A7068',
                                fontWeight: 300,
                                margin: 0
                            }}>{trait.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .about-img-hover:hover { transform: scale(1.05); }
                @media (max-width: 900px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 6rem !important; }
                    .about-grid > div:first-child { padding-right: 0 !important; }
                    .traits-grid { grid-template-columns: 1fr !important; margin-top: 5rem !important; }
                    .trait-cell { border-right: none !important; border-bottom: 1px solid rgba(13,13,13,0.1); padding: 2.5rem 0 !important; }
                    .trait-cell:last-child { border-bottom: none; }
                }
            `}</style>
        </section>
    );
}
