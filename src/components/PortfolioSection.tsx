"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import styles from './PortfolioSection.module.css';

export const PortfolioSection = () => {
    return (
        <section className={styles.section} id="portfolio">
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>Subsidiary Portfolio</h2>
                </div>

                <div className={styles.grid}>
                    {/* Product Card 1 */}
                    <div className={styles.productCard}>
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/sub_pictomusic.png"
                                alt="PictoMusic Interface"
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.category}>Music AI</div>
                            <h3>PictoMusic</h3>
                            <p>World's First Image-to-Music Platform.</p>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className={styles.productCard}>
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/sub_sensor.png"
                                alt="Sensor Labs Hardware"
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.category}>Hardware</div>
                            <h3>Sensor Labs</h3>
                            <p>3D Cameras & Security Systems.</p>
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className={styles.productCard}>
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/sub_robotics.png"
                                alt="Echorbe Robot"
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.category}>Automation</div>
                            <h3>Echorbe Robotics</h3>
                            <p>Service Robots & Industrial Automation.</p>
                        </div>
                    </div>

                    {/* Product Card 4 */}
                    <div className={styles.productCard}>
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/sub_video.png"
                                alt="Video AI Interface"
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.category}>Media</div>
                            <h3>Video AI Studio</h3>
                            <p>Auto-Editing & BGM Generation.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
