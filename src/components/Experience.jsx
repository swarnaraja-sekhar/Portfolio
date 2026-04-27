import React, { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";

export default function Experience() {
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

    const experiences = [
        {
            title: "Full Stack & SaaS Developer",
            company: "OnlyUsMedia",
            type: "Work",
            duration: "Present",
            description: "Developing scalable, high-performance SaaS applications and full-stack solutions. Focusing on modern architecture, clean code, and premium user experiences.",
        },
        {
            title: "Frontend Developer Intern",
            company: "Cognetix Technologies",
            type: "Work",
            duration: "Jan 2026 – Feb 2026",
            description: "Completed an intensive Full Stack Web Development internship, delivering production-ready MERN stack projects with secure authentication, REST APIs, and responsive user interfaces.",
        },
        {
            title: "Full Stack Developer Trainee",
            company: "PentechAI Solutions",
            type: "Work",
            duration: "Jul 2025 – Sep 2025",
            description: "Completed intensive training in MERN stack development. Built several full-stack projects including a blog platform and a chat application.",
        },
        {
            title: "Computer Science and Engineering",
            company: "RGUKT, Ongole",
            type: "Education",
            duration: "2023 – 2027",
            description: "Pursuing B.Tech in Computer Science & Engineering, focused on Software Engineering, Data Structures, and Algorithms. Led the university coding club.",
        },
    ];

    return (
        <section id="experience" ref={sectionRef} style={{ backgroundColor: '#EDE8E1', padding: '8rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>

                {/* Header */}
                <div className="reveal" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderBottom: '1px solid rgba(13,13,13,0.1)',
                    paddingBottom: '1.5rem',
                    marginBottom: '5rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="label-tag">( 04 )</span>
                        <span className="label-tag">Experience</span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#0D0D0D',
                        margin: 0,
                        letterSpacing: '-0.02em',
                        fontStyle: 'italic',
                    }}>
                        Experience & Education
                    </h2>
                </div>

                {/* Timeline — horizontal rows */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="reveal experience-row"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '200px 1fr auto',
                                gap: '3rem',
                                alignItems: 'flex-start',
                                borderBottom: '1px solid rgba(13,13,13,0.1)',
                                padding: '2.5rem 0',
                                transition: 'background 0.3s ease',
                            }}
                        >
                            {/* Type badge */}
                            <div className="exp-badge-container">
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: '0.62rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    color: exp.type === 'Work' ? '#1A2E2A' : '#5A3E2B',
                                    backgroundColor: exp.type === 'Work' ? 'rgba(26,46,42,0.08)' : 'rgba(90,62,43,0.08)',
                                    borderRadius: '9999px',
                                    padding: '0.35rem 0.85rem',
                                }}>
                                    {exp.type}
                                </span>
                                <p style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: '0.72rem',
                                    color: '#7A7068',
                                    fontWeight: 400,
                                    margin: '0.75rem 0 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                }}>
                                    <Calendar size={12} />
                                    {exp.duration}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="exp-content">
                                <h3 style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: '1.6rem',
                                    fontWeight: 500,
                                    color: '#0D0D0D',
                                    margin: '0 0 0.25rem',
                                    letterSpacing: '-0.01em',
                                    lineHeight: 1.2,
                                }}>{exp.title}</h3>
                                <p style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    color: '#7A7068',
                                    margin: '0 0 1rem',
                                }}>{exp.company}</p>
                                <p style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: '0.9rem',
                                    lineHeight: 1.8,
                                    color: '#5A5248',
                                    fontWeight: 300,
                                    margin: 0,
                                    maxWidth: '600px',
                                }}>{exp.description}</p>
                            </div>

                            {/* Index number */}
                            <span className="exp-index" style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: '4rem',
                                fontWeight: 300,
                                color: 'rgba(13,13,13,0.06)',
                                lineHeight: 1,
                                userSelect: 'none',
                                alignSelf: 'center',
                            }}>0{i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .experience-row {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                        padding: 2rem 0 !important;
                    }
                    .exp-index {
                        display: none !important;
                    }
                    .exp-badge-container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .exp-badge-container p {
                        margin: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
}
