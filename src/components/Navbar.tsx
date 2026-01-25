"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from './ui/Container';
import styles from './Navbar.module.css';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <Container className={styles.container}>
                <div className={styles.logo}>
                    <Link
                        href="/"
                        className={styles.logoLink}
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <Logo />
                    </Link>
                </div>

                <nav className={styles.desktopNav}>
                    <a href="#leadership" className={styles.navLink}>About</a>
                    <a href="#technology" className={styles.navLink}>Technology</a>
                    <a href="#portfolio" className={styles.navLink}>Portfolio</a>
                    <a href="#roadmap" className={styles.navLink}>Roadmap</a>
                    <a href="#contact" className={styles.ctaLink}>Contact</a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <div className={clsx(styles.mobileNav, isMobileMenuOpen && styles.open)}>
                    <a href="#leadership" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#technology" onClick={() => setIsMobileMenuOpen(false)}>Technology</a>
                    <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
                    <a href="#roadmap" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</a>
                </div>
            </Container>
        </header>
    );
};
