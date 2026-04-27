import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const allProjects = [
    {
        title: "Zenith Holidays - Online Travel Company",
        description: "At Zenith Holidays, we understand the diverse travel needs of Indian consumers. As India's leading online travel company, we provide a wide array of holiday packages, catering to...",
        techStack: ["Next.js", "Typescript", "Node.js", "+1"],
        link: "https://www.zenithholidays.com/",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        featured: true
    },
    {
        title: "Golden Boy Evolve - Fitness Tracker",
        description: "A comprehensive fitness tracking platform featuring interactive data visualization, advanced BMI and TDEE calculators, goal setting, and streak tracking.",
        techStack: ["React", "Typescript", "Tailwind CSS", "+1"],
        link: "https://golden-boy-evolve-lime.vercel.app/",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        featured: true
    },
    {
        title: "Palazzo Lakeside Hotel - Booking Website",
        description: "Offering gorgeous views of Lake Cecile, the Palazzo Lakeside Hotel is one of the Best Family Hotels. A premium hospitality and reservation platform featuring seamless online booking.",
        techStack: ["React", "Typescript", "Node.js", "+1"],
        link: "https://palazzolakesidehotel.com/",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        featured: true
    },
    {
        title: "Novacrest Developers - Startup Ecosystem",
        description: "A dynamic startup ecosystem bridging the gap between World-Class Engineering, State-of-the-Art Education, and Elite Career Growth. Recognized by MSME Govt. of India.",
        techStack: ["Next.js", "Tailwind CSS", "Prisma", "Node.js"],
        link: "https://www.novacrestdevelopers.com/",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        featured: false
    },
    {
        title: "Ornate - Annual Cultural Fest Website",
        description: "A high-performance event platform for RGUKT Ongole's premier cultural festival. Designed to handle large-scale traffic, manage event registrations, and showcase student talent.",
        techStack: ["React", "Tailwind CSS", "Node.js", "Express"],
        link: "https://ornate.rguktong.in/",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        featured: false
    },
    {
        title: "E-Shikshan - Smart Education",
        description: "A MERN-based smart education platform with course enrollment, interactive roadmaps, hackathons, resume tools, and role-based dashboards.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://e-shikshan.vercel.app/",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        featured: false
    }
];

export default function AllProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: "#0D0D0D", minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }} className="projects-page">
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem" }} className="projects-container">
                
                {/* Header */}
                <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: "#F8F5F0",
                        marginBottom: "1rem",
                        fontWeight: 400,
                        letterSpacing: "-0.02em"
                    }}>
                        All Works
                    </h1>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        color: "rgba(248,245,240,0.6)",
                        fontSize: "0.95rem",
                        maxWidth: "600px",
                        margin: "0 auto"
                    }}>
                        A complete collection of my web applications, SaaS platforms, and client projects.
                    </p>
                </div>

                {/* Grid */}
                <div 
                    style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
                        gap: "2rem" 
                    }}
                    className="projects-grid"
                >
                    {allProjects.map((project, idx) => (
                        <div 
                            key={idx}
                            style={{
                                backgroundColor: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s ease, border-color 0.3s ease",
                            }}
                            className="project-card"
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.borderColor = "rgba(196,184,168,0.3)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                            }}
                        >
                            {/* Card Image */}
                            <div style={{ width: "100%", aspectRatio: "16/10", position: "relative", overflow: "hidden" }}>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                {project.featured && (
                                    <div style={{
                                        position: "absolute",
                                        bottom: "1rem",
                                        left: "1rem",
                                        backgroundColor: "rgba(34, 197, 94, 0.2)",
                                        color: "#4ADE80",
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "9999px",
                                        fontSize: "0.7rem",
                                        fontFamily: "'Manrope', sans-serif",
                                        fontWeight: 600,
                                        backdropFilter: "blur(4px)",
                                        border: "1px solid rgba(34, 197, 94, 0.3)"
                                    }}>
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Card Body */}
                            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                <h3 style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#F8F5F0",
                                    marginBottom: "0.75rem",
                                    lineHeight: 1.4
                                }}>
                                    {project.title}
                                </h3>
                                
                                <p style={{
                                    fontFamily: "'Manrope', sans-serif",
                                    fontSize: "0.85rem",
                                    color: "rgba(248,245,240,0.6)",
                                    lineHeight: 1.6,
                                    marginBottom: "1.5rem",
                                    flexGrow: 1
                                }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                                    {project.techStack.map((tag, i) => (
                                        <span 
                                            key={i}
                                            style={{
                                                backgroundColor: "rgba(255,255,255,0.05)",
                                                color: "rgba(248,245,240,0.7)",
                                                padding: "0.3rem 0.8rem",
                                                borderRadius: "9999px",
                                                fontSize: "0.7rem",
                                                fontFamily: "'Manrope', sans-serif",
                                                fontWeight: 600
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        padding: "0.8rem",
                                        backgroundColor: "transparent",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "8px",
                                        color: "#F8F5F0",
                                        textDecoration: "none",
                                        fontFamily: "'Manrope', sans-serif",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                    }}
                                >
                                    Live Demo <ExternalLink size={14} style={{ marginLeft: "0.5rem" }} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .projects-page {
                        padding-top: 100px !important;
                        padding-bottom: 60px !important;
                    }
                    .projects-container {
                        padding: 0 1.5rem !important;
                    }
                    .projects-grid {
                        gap: 1.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
}
