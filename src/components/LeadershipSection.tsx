"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import styles from './LeadershipSection.module.css';

export const LeadershipSection = () => {
    return (
        <section className={styles.section} id="leadership">
            <Container>
                {/* Leaders */}
                <div className={styles.leaderGrid}>
                    <div className={styles.leader}>
                        <div className={styles.portrait}>
                            <Image
                                src="/assets/leader_ceo_ghibli_mid_age.png"
                                alt="Peter Lee - CEO"
                                fill
                                className={styles.portraitImage}
                            />
                        </div>
                        <h3 className={styles.name}>Peter Lee</h3>
                        <div className={styles.role}>CEO & CoFounder</div>
                    </div>
                    <div className={styles.leader}>
                        <div className={styles.portrait}>
                            <Image
                                src="/assets/leader_cto_ghibli_mid_age.png"
                                alt="James Kim - CTO"
                                fill
                                className={styles.portraitImage}
                            />
                        </div>
                        <h3 className={styles.name}>James Kim</h3>
                        <div className={styles.role}>CTO & CoFounder</div>
                    </div>
                </div>

                {/* Roadmap Graphic */}
                <div className={styles.roadmapBlock} id="roadmap">
                    <h2 className={styles.roadmapTitle}>Vision 2030</h2>
                    <div className={styles.roadmapLine}>
                        <div className={styles.point}>
                            <div className={styles.dot}></div>
                            <div className={styles.date}>2026</div>
                            <div className={styles.event}>Global OEM</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.point}>
                            <div className={styles.dot}></div>
                            <div className={styles.date}>2027</div>
                            <div className={styles.event}>Sensor Mass Production</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.point}>
                            <div className={styles.dot}></div>
                            <div className={styles.date}>2030</div>
                            <div className={styles.event}>1 Trillion Value</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
