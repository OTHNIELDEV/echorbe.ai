"use client";

import React from 'react';
import { Hero3D } from './Hero3D';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';
import { Logo } from './ui/Logo'; // Import Logo if needed for visual consistency, though text is requested here

export const HeroSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.backgroundGlow}></div>
            <Container className={styles.contentContainer}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.textContent}
                    // initial={{ opacity: 0, x: -30 }} 
                    // animate={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className={styles.labelGroup}>
                            <div className={styles.label}>ECHORBE Advanced AI Research Institute (EAARI)</div>
                            <div className={styles.aiTagline}>Personal Physical Ontological Conscious AI</div>
                        </div>
                        <h1 className={styles.headline}>
                            echorbe <span className={styles.highlight}>holdings</span>
                        </h1>

                        <p className={styles.subheadline}>
                            We hold the core IP of Vision, Emotion, Video, Music, and Robotics.<br />
                        </p>
                        {/* Tagline removed from here */}
                        <span className={styles.subKorean}>에콜브 홀딩스 - 비전, 감성, 영상, 음악, 로봇 공학의 핵심 IP를 보유한 글로벌 AI 기업</span>

                        <div className={styles.buttonGroup}>
                            <a href="#about">
                                <Button variant="primary" size="lg" className={styles.primaryBtn}>Explore Governance</Button>
                            </a>
                            <a href="#technology">
                                <Button variant="outline" size="lg" className={styles.techBtn}>Our Technologies</Button>
                            </a>
                        </div>
                    </motion.div>

                    <div className={styles.visualContent}>
                        <Hero3D />
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <span className={styles.scrollText}>Scroll to Discover</span>
                    <div className={styles.line}></div>
                </div>
            </Container>
        </section>
    );
};
