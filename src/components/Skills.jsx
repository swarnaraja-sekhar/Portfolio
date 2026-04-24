import React, { useState, useEffect, useRef } from "react";
import { Monitor, Server, Database, Cloud, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';

const skillCategories = [
    {
        id: "frontend",
        title: "Frontend",
        subtitle: "Creating immersive user interfaces",
        icon: Monitor,
        skills: [
            { name: "React", abbr: "Re", color: "#61DAFB" },
            { name: "HTML5", abbr: "H5", color: "#E34F26" },
            { name: "CSS3", abbr: "C3", color: "#1572B6" },
            { name: "JavaScript", abbr: "JS", color: "#F7DF1E" },
            { name: "Tailwind", abbr: "Tw", color: "#06B6D4" },
            { name: "Bootstrap", abbr: "B", color: "#7952B3" },
        ]
    },
    {
        id: "backend",
        title: "Backend",
        subtitle: "Building robust APIs and servers",
        icon: Server,
        skills: [
            { name: "Node.js", abbr: "No", color: "#339933" },
            { name: "Express", abbr: "Ex", color: "#FFFFFF" },
            { name: "Next.js", abbr: "Nx", color: "#FFFFFF" },
            { name: "GraphQL", abbr: "Gr", color: "#E10098" },
            { name: "REST API", abbr: "API", color: "#0096D6" },
        ]
    },
    {
        id: "database",
        title: "Database",
        subtitle: "Managing and optimizing data",
        icon: Database,
        skills: [
            { name: "MongoDB", abbr: "Mg", color: "#47A248" },
            { name: "MySQL", abbr: "My", color: "#4479A1" },
            { name: "PostgreSQL", abbr: "Pg", color: "#4169E1" },
            { name: "Redis", abbr: "Rd", color: "#DC382D" },
            { name: "Supabase", abbr: "Su", color: "#3ECF8E" },
        ]
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        subtitle: "Scalable cloud infrastructure",
        icon: Cloud,
        skills: [
            { name: "AWS", abbr: "AW", color: "#FF9900" },
            { name: "Docker", abbr: "Do", color: "#2496ED" },
            { name: "Kubernetes", abbr: "Ku", color: "#326CE5" },
            { name: "Firebase", abbr: "Fi", color: "#FFCA28" },
            { name: "Vercel", abbr: "Ve", color: "#FFFFFF" },
            { name: "GitHub", abbr: "Gh", color: "#FFFFFF" },
        ]
    }
];

export default function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sectionRef = useRef(null);

    // Intersection observer for section reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Auto-play interval
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % skillCategories.length);
        }, 2000); // Change every 2 seconds
        
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    };

    const handleDotClick = (index) => {
        setIsAutoPlaying(false);
        setActiveIndex(index);
    };

    const activeCategory = skillCategories[activeIndex];
    const IconComponent = activeCategory.icon;

    return (
        <section id="skills" style={{ backgroundColor: '#0D0D0D', padding: '8rem 0' }}>
            <div 
                ref={sectionRef} 
                style={{ 
                    maxWidth: '1200px', 
                    margin: '0 auto', 
                    padding: '0 2.5rem',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    transition: 'all 0.8s ease'
                }}
            >
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    paddingBottom: '1.5rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="label-tag-light">( 02 )</span>
                        <span className="label-tag-light">Skills</span>
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
                        Technical Arsenal
                    </h2>
                </div>

                {/* Main Carousel Container */}
                <div 
                    style={{
                        backgroundColor: '#111111',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '4rem 2rem',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Navigation Arrows */}
                    <button 
                        onClick={handlePrev}
                        style={{
                            position: 'absolute',
                            left: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            zIndex: 10
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                        }}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button 
                        onClick={handleNext}
                        style={{
                            position: 'absolute',
                            right: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            zIndex: 10
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                        }}
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div 
                        key={activeIndex}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            animation: 'carouselSlide 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                            width: '100%'
                        }}
                    >
                        {/* Category Info */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '4rem',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: '#F8F5F0'
                            }}>
                                <IconComponent size={28} />
                            </div>
                            <h3 style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: '#F8F5F0',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em'
                            }}>
                                {activeCategory.title}
                            </h3>
                            <p style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontSize: '0.9rem',
                                color: 'rgba(248,245,240,0.5)',
                                fontWeight: 400
                            }}>
                                {activeCategory.subtitle}
                            </p>
                        </div>

                        {/* Skills Icons Row */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '2.5rem',
                            maxWidth: '800px',
                            minHeight: '120px' // prevent jumping when switching categories
                        }}>
                            {activeCategory.skills.map((skill, idx) => (
                                <div 
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        width: '80px',
                                    }}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '14px',
                                        backgroundColor: '#1A1A1A',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = '#222222';
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = `0 10px 20px -10px ${skill.color}40`;
                                        e.currentTarget.style.borderColor = `${skill.color}40`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = '#1A1A1A';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                    }}
                                    >
                                        <span style={{
                                            fontFamily: "'Manrope', sans-serif",
                                            fontSize: '1.2rem',
                                            fontWeight: 800,
                                            color: skill.color,
                                        }}>
                                            {skill.abbr}
                                        </span>
                                    </div>
                                    <span style={{
                                        fontFamily: "'Manrope', sans-serif",
                                        fontSize: '0.75rem',
                                        fontWeight: 500,
                                        color: 'rgba(248,245,240,0.6)',
                                        textAlign: 'center'
                                    }}>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category Pills Navigation */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginTop: '5rem'
                    }}>
                        {skillCategories.map((cat, index) => {
                            const isActive = index === activeIndex;
                            const CatIcon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => handleDotClick(index)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '9999px',
                                        backgroundColor: isActive ? '#F8F5F0' : 'transparent',
                                        border: `1px solid ${isActive ? '#F8F5F0' : 'rgba(255,255,255,0.1)'}`,
                                        color: isActive ? '#0D0D0D' : 'rgba(248,245,240,0.6)',
                                        fontFamily: "'Manrope', sans-serif",
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={e => {
                                        if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                    }}
                                    onMouseLeave={e => {
                                        if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}
                                >
                                    <CatIcon size={16} />
                                    {cat.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Auto-playing Indicator */}
                    <div style={{
                        marginTop: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: isAutoPlaying ? 1 : 0.5,
                        transition: 'opacity 0.3s ease'
                    }}>
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: isAutoPlaying ? '#4ADE80' : 'rgba(255,255,255,0.3)',
                            boxShadow: isAutoPlaying ? '0 0 10px #4ADE80' : 'none',
                        }} />
                        <span style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: '0.7rem',
                            color: 'rgba(248,245,240,0.4)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            {isAutoPlaying ? 'Auto playing' : 'Paused'}
                        </span>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes carouselSlide {
                    0% {
                        opacity: 0;
                        transform: translateX(40px) scale(0.98);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}
