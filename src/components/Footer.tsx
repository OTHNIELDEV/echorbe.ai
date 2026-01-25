import React from 'react';
import { Container } from './ui/Container';
import styles from './Footer.module.css';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <Container className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Logo />
                        </div>
                        <p className={styles.tagline}>A Global AI Tech Holding Company.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Company</h4>
                        <a href="#about">About</a>
                        <a href="#portfolio">Subsidiaries</a>
                        <a href="#roadmap">Roadmap</a>
                        <a href="#">Careers</a>
                    </div>

                    <div className={styles.links}>
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Security</a>
                    </div>

                    <div className={styles.social}>
                        <h4>Connect</h4>
                        <div className={styles.icons}>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Github size={20} /></a>
                        </div>
                        <div className={styles.address}>
                            Seoul, South Korea<br />
                            contact@echorbe.ai
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    &copy; {new Date().getFullYear()} Echorbe AI Technology Holdings. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};
