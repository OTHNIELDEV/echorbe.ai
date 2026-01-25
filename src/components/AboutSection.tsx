"use client";

import React from 'react';
import { Container } from './ui/Container';
import styles from './AboutSection.module.css';
import { Network, Database, ShieldCheck } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section className={styles.section} id="about">
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>Governance Structure</h2>
                    <p className={styles.subtitle}>Benchmarking Alphabet's Holding Model</p>
                </div>

                {/* Sun & Planets Diagram Replacement (CSS Implementation) */}
                {/* Sun & Planets Diagram Replacement (CSS Implementation) */}
                <div className={styles.governanceDiagram}>
                    <div className={styles.diagramWrapper}>
                        {/* Sun (Holdings) */}
                        <div className={styles.sunNode}>
                            <div className={styles.sunLabel}>HOLDINGS</div>
                            <div className={styles.sunSub}>IP & R&D</div>
                        </div>

                        {/* Orbit Ring */}
                        <div className={styles.orbitRing}></div>

                        {/* Planet Nodes */}
                        <div className={`${styles.planetNode} ${styles.p1}`}>Pictomusic</div>
                        <div className={`${styles.planetNode} ${styles.p2}`}>Sensor Labs</div>
                        <div className={`${styles.planetNode} ${styles.p3}`}>Robotics</div>
                        <div className={`${styles.planetNode} ${styles.p4}`}>Video AI</div>
                        <div className={`${styles.planetNode} ${styles.p5}`}>Edu AI</div>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.infoCard}>
                        <ShieldCheck className={styles.icon} />
                        <h3>IP Protection</h3>
                        <p>Centralized patent management.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <Database className={styles.icon} />
                        <h3>Separated Investment</h3>
                        <p>Independent subsidiary funding.</p>
                    </div>
                    <div className={styles.infoCard}>
                        <Network className={styles.icon} />
                        <h3>Tech Licensing</h3>
                        <p>Core engine distribution.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
