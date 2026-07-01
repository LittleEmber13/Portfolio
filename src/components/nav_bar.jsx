import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);
    const navRef = useRef(null);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const desktopNav = show ? (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-bar hidden md:flex p-2 gap-4 !rounded-full px-8 fixed z-10 mt-4"
        >
            <Link to="/#welcome" className="cursor-pointer">{t('nav.welcome')}</Link>
            <Link to="/#projects" className="cursor-pointer">{t('nav.projects')}</Link>
            <Link to="/#skills" className="cursor-pointer">{t('nav.skills')}</Link>
            <Link to="/#contact" className="cursor-pointer">{t('nav.contact')}</Link>
            <div className="ml-2">
                <select
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    aria-label={t('nav.language') || 'Language'}
                    className="bg-transparent text-sm p-1 rounded"
                >
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
            </div>
        </motion.div>
    ) : null;

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

    return (
        <>
            <button
                ref={btnRef}
                aria-label="Toggle menu"
                onClick={() => setIsOpen(prev => !prev)}
                className="md:hidden fixed top-4 left-4 z-30 bg-[var(--color-surface)] p-2 rounded-full shadow nav-bar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={navRef}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.18 }}
                        className="md:hidden fixed top-16 left-4 z-30 bg-[var(--color-surface)] rounded-lg p-4 shadow w-56"
                    >
                        <div className="flex flex-col gap-3">
                            <Link to="/#welcome" onClick={() => setIsOpen(false)} className="cursor-pointer">{t('nav.welcome')}</Link>
                            <Link to="/#projects" onClick={() => setIsOpen(false)} className="cursor-pointer">{t('nav.projects')}</Link>
                            <Link to="/#skills" onClick={() => setIsOpen(false)} className="cursor-pointer">{t('nav.skills')}</Link>
                            <Link to="/#contact" onClick={() => setIsOpen(false)} className="cursor-pointer">{t('nav.contact')}</Link>
                            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
                                <select
                                    value={i18n.language}
                                    onChange={(e) => {
                                        i18n.changeLanguage(e.target.value);
                                        setIsOpen(false);
                                    }}
                                    aria-label={t('nav.language') || 'Language'}
                                    className="bg-transparent text-sm p-1 rounded"
                                >
                                    <option value="en">EN</option>
                                    <option value="es">ES</option>
                                </select>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {desktopNav}
            </AnimatePresence>
        </>
    );
}
