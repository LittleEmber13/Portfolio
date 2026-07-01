import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile_image.png";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);
    const navRef = useRef(null);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!isOpen) return;
            const target = e.target;
            if (
                navRef.current && !navRef.current.contains(target) &&
                btnRef.current && !btnRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const navLinks = [
        { to: '/#welcome', label: t('nav.welcome') },
        { to: '/#projects', label: t('nav.projects') },
        { to: '/#skills', label: t('nav.skills') },
        { to: '/#contact', label: t('nav.contact') },
    ];

    const textColor = scrolled ? '#151515' : '#ffffff';
    const colorTransition = { transition: 'color 0.35s ease-in-out' };

    return (
        <header
            style={{
                paddingTop: scrolled ? '1.1rem' : '0.6rem',
                paddingBottom: scrolled ? '1.1rem' : '0.6rem',
                backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0)',
                boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.18)' : '0 0 0 rgba(0,0,0,0)',
                transition: 'padding 0.35s ease-in-out, background-color 0.35s ease-in-out, box-shadow 0.35s ease-in-out',
            }}
            className="fixed top-0 left-0 w-full z-30"
        >
            <div className="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-16">
                <Link to="/#welcome" className="flex items-center gap-3 cursor-pointer">
                    <img
                        src={profileImage}
                        alt="Daniel Duran"
                        style={{
                            width: scrolled ? 52 : 40,
                            height: scrolled ? 52 : 40,
                            borderColor: scrolled ? 'var(--color-primary)' : 'rgba(255,255,255,0.5)',
                            transition: 'width 0.35s ease-in-out, height 0.35s ease-in-out, border-color 0.35s ease-in-out',
                        }}
                        className="rounded-full object-cover border-2"
                    />
                    <span style={{ color: textColor, ...colorTransition }} className="hidden sm:inline font-semibold">
                        Daniel Duran
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <div key={link.to} style={{ color: textColor, ...colorTransition }}>
                            <Link to={link.to} className="cursor-pointer font-medium hover:opacity-70 transition-opacity">
                                {link.label}
                            </Link>
                        </div>
                    ))}
                    <select
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        aria-label={t('nav.language') || 'Language'}
                        style={{ color: textColor, ...colorTransition }}
                        className="bg-transparent text-sm p-1 rounded ml-2"
                    >
                        <option value="en" className="text-[#151515]">EN</option>
                        <option value="es" className="text-[#151515]">ES</option>
                    </select>
                </nav>

                <button
                    ref={btnRef}
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen((prev) => !prev)}
                    style={{ color: textColor, ...colorTransition }}
                    className="md:hidden p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={navRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="md:hidden mx-4 mt-3 rounded-2xl p-4 bg-white shadow-lg"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer text-[#151515] font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2 border-t border-black/10">
                                <select
                                    value={i18n.language}
                                    onChange={(e) => {
                                        i18n.changeLanguage(e.target.value);
                                        setIsOpen(false);
                                    }}
                                    aria-label={t('nav.language') || 'Language'}
                                    className="bg-transparent text-sm p-1 rounded text-[#151515]"
                                >
                                    <option value="en">EN</option>
                                    <option value="es">ES</option>
                                </select>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
