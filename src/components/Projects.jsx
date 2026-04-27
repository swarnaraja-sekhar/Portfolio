import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import eshikshanImg from "../assets/eshikshan.png";

const featuredProjects = [
    {
        index: "01",
        title: "Zenith Holidays",
        subtitle: "Premium Travel & Booking SaaS",
        description:
            "A comprehensive travel and holiday booking platform offering curated tour packages, flight bookings, and seamless itinerary management with a high-performance architecture.",
        techStack: ["Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        link: "https://www.zenithholidays.com/",
        github: "#",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
        secondaryImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    },
    {
        index: "02",
        title: "Golden Boy Evolve",
        subtitle: "Advanced Fitness & Health Tracker",
        description:
            "A comprehensive fitness tracking platform featuring interactive data visualization, advanced BMI and TDEE calculators, goal setting, and streak tracking.",
        techStack: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Vercel"],
        link: "https://golden-boy-evolve-lime.vercel.app/",
        github: "#",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
        secondaryImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    },
    {
        index: "03",
        title: "Palazzo Lakeside Hotel",
        subtitle: "Luxury Hospitality Platform",
        description:
            "A premium hospitality and reservation platform featuring seamless online booking, dynamic room availability, and an elegant visual experience for a lakeside resort.",
        techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
        link: "https://palazzolakesidehotel.com/",
        github: "#",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        secondaryImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    },
];



/* ─── Sticky Scroll Projects ─── */
function StickyProjects({ projects }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs = useRef([]);
    const textRef = useRef(null);

    useEffect(() => {
        // Observer for active text
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = imageRefs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        imageRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Zoom and parallax effect on scroll
        const handleScroll = () => {
            imageRefs.current.forEach((ref) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Calculate how much the element is in view (0 to 1)
                    // 0 = just entering from bottom or leaving at top
                    // 1 = perfectly centered
                    const viewCenter = rect.top + rect.height / 2;
                    const viewportCenter = windowHeight / 2;
                    const distanceCenter = Math.abs(viewportCenter - viewCenter);
                    const maxDistance = windowHeight * 0.8;
                    const progress = Math.max(0, 1 - (distanceCenter / maxDistance));
                    
                    // More dramatic zoom: 1.0 to 1.25
                    const scale = 1 + (progress * 0.25);
                    const smallScale = 1 + (progress * 0.15);
                    
                    // Parallax movement
                    const translateY = (viewportCenter - viewCenter) * 0.1;
                    
                    const img = ref.querySelector('.scroll-zoom-img');
                    if (img) {
                        img.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                    }

                    const smallImg = ref.querySelector('.scroll-zoom-img-small');
                    if (smallImg) {
                        smallImg.style.transform = `scale(${smallScale}) translateY(${translateY * 1.5}px)`;
                    }
                }
            });

            // Mobile zoom effect
            const mobileImages = document.querySelectorAll('.mobile-project-img');
            mobileImages.forEach(img => {
                const rect = img.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const viewCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;
                const distanceCenter = Math.abs(viewportCenter - viewCenter);
                const maxDistance = windowHeight * 0.7;
                const progress = Math.max(0, 1 - (distanceCenter / maxDistance));
                
                // Zoom on mobile: 1.0 to 1.15
                const scale = 1 + (progress * 0.15);
                img.style.transform = `scale(${scale})`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Init

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeProject = projects[activeIndex] || projects[0];

    return (
        <>
            {/* Desktop Sticky Layout */}
            <div style={{ position: 'relative', display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="desktop-sticky">
                {/* Left side: Sticky Text */}
                <div style={{
                    width: '45%',
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 4rem 0 2.5rem',
                    marginLeft: 'max(0px, calc((100vw - 1400px) / 2))',
                }}>
                    <div 
                        key={activeIndex} 
                        style={{ 
                            animation: 'slideReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                            opacity: 0
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "rgba(196,184,168,0.5)" }}>({activeProject.index})</span>
                            <div style={{ height: "1px", width: "3rem", backgroundColor: "rgba(196,184,168,0.3)" }} />
                            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(196,184,168,0.5)" }}>{activeProject.subtitle}</span>
                        </div>

                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1, color: "#F8F5F0", marginBottom: "1.5rem", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                            {activeProject.title}
                        </h3>

                        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(248,245,240,0.55)", fontWeight: 300, maxWidth: "480px", marginBottom: "2.5rem" }}>
                            {activeProject.description}
                        </p>
                        
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3.5rem" }}>
                            {activeProject.techStack.map((t, i) => (
                                <span key={i} style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "rgba(196,184,168,0.6)", border: "1px solid rgba(196,184,168,0.2)", borderRadius: "9999px", padding: "0.4rem 1rem" }}>{t}</span>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "1rem" }}>
                            <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="btn-pill-light" style={{ fontSize: "0.65rem", padding: "0.75rem 2rem" }}>
                                Live Demo <ExternalLink size={14} />
                            </a>
                            {activeProject.github !== "#" && (
                                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn-pill-outline-light" style={{ fontSize: "0.65rem", padding: "0.75rem 2rem" }}>
                                    Source Code <Github size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right side: Scrolling Images */}
                <div style={{ width: '55%', paddingRight: 'max(0px, calc((100vw - 1400px) / 2))' }}>
                    {projects.map((project, i) => (
                        <div 
                            key={i} 
                            ref={el => imageRefs.current[i] = el}
                            style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2.5rem 4rem 0' }}
                            className="proj-dual-container"
                        >
                            <div style={{ width: '100%', height: 'calc(100vh - 8rem)', position: 'relative', overflow: 'hidden' }}>
                                
                                {/* Large Background Image */}
                                <div style={{ 
                                    position: 'absolute', 
                                    right: 0, 
                                    top: 0, 
                                    width: '75%', 
                                    height: '100%', 
                                    overflow: 'hidden',
                                    animation: activeIndex === i ? 'imageSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none'
                                }}>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="scroll-zoom-img"
                                        style={{ 
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transition: 'transform 0.1s ease-out', willChange: 'transform'
                                        }} 
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0D0D0D 0%, transparent 15%)', pointerEvents: 'none' }} />
                                </div>

                                {/* Small Overlapping Image */}
                                <div style={{ 
                                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                                    width: '45%', aspectRatio: '4/5', overflow: 'hidden', zIndex: 2,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                                    animation: activeIndex === i ? 'imageSlideInDelayed 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                                    opacity: 0
                                }}>
                                    <img 
                                        src={project.secondaryImage} 
                                        alt={`${project.title} detail`} 
                                        className="scroll-zoom-img-small"
                                        style={{ 
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transition: 'transform 0.1s ease-out', willChange: 'transform'
                                        }} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Stacked Layout */}
            <div className="mobile-stacked" style={{ display: 'none', padding: '0 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {projects.map((project, i) => (
                    <div key={i} className="reveal-project" style={{ paddingBottom: '5rem', opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s ease' }}>
                        <div style={{ width: '100%', aspectRatio: '4/3', marginBottom: '2rem', overflow: 'hidden', borderRadius: '8px' }}>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="mobile-project-img"
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover',
                                    transition: 'transform 0.1s ease-out',
                                    willChange: 'transform'
                                }} 
                            />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "rgba(196,184,168,0.5)" }}>({project.index})</span>
                            <div style={{ height: "1px", width: "2rem", backgroundColor: "rgba(196,184,168,0.3)" }} />
                            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(196,184,168,0.5)" }}>{project.subtitle}</span>
                        </div>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1, color: "#F8F5F0", marginBottom: "1rem", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                            {project.title}
                        </h3>
                        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(248,245,240,0.55)", fontWeight: 300, marginBottom: "1.5rem" }}>
                            {project.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                            {project.techStack.map((t, idx) => (
                                <span key={idx} style={{ fontFamily: "'Manrope', sans-serif", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "rgba(196,184,168,0.6)", border: "1px solid rgba(196,184,168,0.2)", borderRadius: "9999px", padding: "0.3rem 0.8rem" }}>{t}</span>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-pill-light" style={{ fontSize: "0.6rem", padding: "0.65rem 1.5rem" }}>Live Demo <ExternalLink size={12} /></a>
                            {project.github !== "#" && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-pill-outline-light" style={{ fontSize: "0.6rem", padding: "0.65rem 1.5rem" }}>Source Code <Github size={12} /></a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes slideReveal {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes imageSlideIn {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes imageSlideInDelayed {
                    from { opacity: 0; transform: translateX(80px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @media (max-width: 900px) {
                    .desktop-sticky { display: none !important; }
                    .mobile-stacked { display: block !important; }
                    #projects > div:first-of-type {
                        padding: 5rem 1.5rem 2rem !important;
                    }
                    #projects > div:last-of-type {
                        padding: 3rem 1.5rem 6rem !important;
                    }
                    .mobile-stacked {
                        padding: 0 1.5rem !important;
                    }
                }
                .scrolling-img-panel > div:hover .proj-overlay-scroll { opacity: 1 !important; }
            `}</style>
        </>
    );
}



/* ─── Main Section ─── */
export default function Projects() {
    const headerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        
        const mobileCards = sectionRef.current?.querySelectorAll('.reveal-project') ?? [];
        mobileCards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={sectionRef} style={{ backgroundColor: "#0D0D0D" }}>

            {/* ── Section Header ── */}
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "8rem 2.5rem 4rem" }}>
                <div
                    ref={headerRef}
                    style={{
                        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                        borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem",
                        opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease",
                        flexWrap: "wrap", gap: "1rem",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span className="label-tag-light">( 03 )</span>
                        <span className="label-tag-light">Projects</span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 400, color: "#F8F5F0", margin: 0,
                        letterSpacing: "-0.02em", fontStyle: "italic",
                    }}>
                        Featured Projects
                    </h2>
                </div>
            </div>

            {/* ── Top 3 Featured Scroll Panels ── */}
            <div>
                <StickyProjects projects={featuredProjects} />
            </div>

            {/* ── View All Projects Button ── */}
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "5rem 2.5rem 8rem", display: 'flex', justifyContent: 'center' }}>
                <Link 
                    to="/projects"
                    className="btn-pill-outline-light"
                    style={{ fontSize: "0.8rem", padding: "1rem 3rem" }}
                >
                    View All Projects <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
                </Link>
            </div>
        </section>
    );
}
