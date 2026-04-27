import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                backgroundColor: '#0D0D0D', // Deep charcoal
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '4rem', // Offset for navbar
            }}
        >
            {/* Subtle Forest Green Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(26,46,42,0.5) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 0,
            }} />
            
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(196,184,168,0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 0,
            }} />

            <div style={{
                maxWidth: '1400px',
                width: '100%',
                margin: '0 auto',
                padding: '0 2.5rem',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                
                {/* Profile Avatar */}
                <div style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '2.5rem',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '5px',
                }} className="hero-avatar">
                    <img 
                        src={profileImg} 
                        alt="Swarna Rajasekhar" 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            filter: 'grayscale(15%) contrast(105%)',
                        }}
                    />
                </div>

                {/* Subtitle */}
                <div 
                    className="hero-fade-up" 
                    style={{ 
                        display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem',
                        animationDelay: '0.1s' 
                    }}
                >
                    <div style={{ width: '3rem', height: '1px', backgroundColor: 'rgba(196,184,168,0.3)' }} />
                    <span style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '0.75rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'rgba(196,184,168,0.9)',
                        fontWeight: 600
                    }}>
                        Full Stack & SaaS Developer
                    </span>
                    <div style={{ width: '3rem', height: '1px', backgroundColor: 'rgba(196,184,168,0.3)' }} />
                </div>

                {/* Main Headline */}
                <h1 
                    className="hero-fade-up" 
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(4rem, 11vw, 9rem)',
                        fontWeight: 400,
                        lineHeight: 0.9,
                        color: '#F8F5F0',
                        margin: '0 0 2rem 0',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                        animationDelay: '0.2s'
                    }}
                >
                    Swarna<br />
                    <i style={{ color: '#C4B8A8', fontWeight: 300, textTransform: 'lowercase' }}>rajasekhar</i>
                </h1>

                {/* Description */}
                <p 
                    className="hero-fade-up" 
                    style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'rgba(248,245,240,0.6)',
                        fontWeight: 300,
                        maxWidth: '540px',
                        margin: '0 auto 3.5rem auto',
                        animationDelay: '0.3s'
                    }}
                >
                    I engineer scalable, user-centric web applications. Blending robust MERN stack architecture with premium digital aesthetics.
                </p>

                {/* CTAs */}
                <div 
                    className="hero-fade-up" 
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        animationDelay: '0.4s'
                    }}
                >
                    <a href="#projects" className="btn-pill-light" style={{ padding: '1rem 3rem', fontSize: '0.8rem' }}>
                        View Projects <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-pill-outline-light" style={{ padding: '1rem 3rem', fontSize: '0.8rem' }}>
                        View Resume <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                opacity: 0.5,
                zIndex: 2,
            }}>
                <span style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#F8F5F0',
                }}>Scroll to explore</span>
                <div style={{ width: '1px', height: '40px', backgroundColor: '#F8F5F0', opacity: 0.4 }} className="scroll-line-anim" />
            </div>

            <style>{`
                @keyframes lineDrop {
                    0% { transform: scaleY(0); transform-origin: top; }
                    50% { transform: scaleY(1); transform-origin: top; }
                    50.1% { transform: scaleY(1); transform-origin: bottom; }
                    100% { transform: scaleY(0); transform-origin: bottom; }
                }
                .scroll-line-anim {
                    animation: lineDrop 2s infinite ease-in-out;
                }
                
                @keyframes heroFadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .hero-fade-up {
                    opacity: 0;
                    animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                .hero-avatar {
                    opacity: 0;
                    animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                @media (max-width: 768px) {
                    #home {
                        padding-top: 6rem !important;
                        padding-bottom: 4rem !important;
                    }
                    .hero-avatar {
                        width: 90px !important;
                        height: 90px !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .hero-fade-up h1 {
                        font-size: clamp(3rem, 15vw, 5rem) !important;
                    }
                    .hero-fade-up p {
                        font-size: 1rem !important;
                        margin-bottom: 2.5rem !important;
                    }
                    .hero-fade-up .btn-pill-light, 
                    .hero-fade-up .btn-pill-outline-light {
                        padding: 0.8rem 2rem !important;
                        width: 100%;
                        max-width: 280px;
                    }
                }
            `}</style>
        </section>
    );
}
