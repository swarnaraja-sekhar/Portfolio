import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", toggle);
        return () => window.removeEventListener("scroll", toggle);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return visible ? (
        <button
            onClick={scrollTop}
            style={{
                position: 'fixed',
                bottom: '2.5rem',
                right: '2.5rem',
                zIndex: 99,
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                border: '1px solid rgba(13,13,13,0.15)',
                backgroundColor: '#F8F5F0',
                color: '#0D0D0D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
            }}
            aria-label="Scroll to top"
            onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#0D0D0D';
                e.currentTarget.style.color = '#F8F5F0';
                e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#F8F5F0';
                e.currentTarget.style.color = '#0D0D0D';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <ArrowUp size={16} />
            <style>{`
                @media (max-width: 768px) {
                    button {
                        bottom: 1.5rem !important;
                        right: 1.5rem !important;
                    }
                }
            `}</style>
        </button>
    ) : null;
}
