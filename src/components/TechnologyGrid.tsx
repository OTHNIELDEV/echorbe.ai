"use client";

import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import styles from './TechnologyGrid.module.css';
import { Eye, Music, Cpu, Scan, Mic, Zap } from 'lucide-react';

export const TechnologyGrid = () => {
    return (
        <section className={styles.section} id="technology">
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>The 6 Core Engines</h2>
                    <p className={styles.subtitle}>Our proprietary technology stack driving the fusion of senses.</p>
                </div>

                <div className={styles.scrollContainer}>
                    {/* Card 1: Vision */}
                    <div className={styles.techCard}>
                        <div className={styles.iconBox}><Eye className={styles.icon} /></div>
                        <div className={styles.cardContent}>
                            <h3>Vision AI</h3>
                            <p>Transformer & Meta SAM</p>
                            <div className={styles.vizContainer}>
                                <Image
                                    src="/assets/tech_vision.png"
                                    alt="Vision AI Reticle"
                                    fill
                                    className={styles.vizImage}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Music */}
                    <div className={styles.techCard}>
                        <div className={styles.iconBox}><Music className={styles.icon} /></div>
                        <div className={styles.cardContent}>
                            <h3>PictoMusic</h3>
                            <p>Emotion-to-Music Engine</p>
                            <div className={styles.vizContainer}>
                                <Image
                                    src="/assets/tech_music.png"
                                    alt="Music AI Soundwaves"
                                    fill
                                    className={styles.vizImage}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Robotics */}
                    <div className={styles.techCard}>
                        <div className={styles.iconBox}><Cpu className={styles.icon} /></div>
                        <div className={styles.cardContent}>
                            <h3>Robotics</h3>
                            <p>NVIDIA Jetson Embedded</p>
                            <div className={styles.vizContainer}>
                                <Image
                                    src="/assets/tech_robotics.png"
                                    alt="Robotic Arm Wireframe"
                                    fill
                                    className={styles.vizImage}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Sensor */}
                    <div className={styles.techCard}>
                        <div className={styles.iconBox}><Scan className={styles.icon} /></div>
                        <div className={styles.cardContent}>
                            <h3>3D Depth</h3>
                            <p>TOF & Lidar Mapping</p>
                            <div className={styles.vizContainer}>
                                <Image
                                    src="/assets/tech_sensor.png"
                                    alt="Lidar Point Cloud"
                                    fill
                                    className={styles.vizImage}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Speech */}
                    <div className={styles.techCard}>
                        <div className={styles.iconBox}><Mic className={styles.icon} /></div>
                        <div className={styles.cardContent}>
                            <h3>Speech</h3>
                            <p>Whisper & Emotion TTS</p>
                            <div className={styles.vizContainer}>
                                <Image
                                    src="/assets/tech_speech.png"
                                    alt="Voice Waveform"
                                    fill
                                    className={styles.vizImage}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Fusion */}
                    <div className={styles.techCard}>
                        <div className={styles.iconBox}><Zap className={styles.icon} /></div>
                        <div className={styles.cardContent}>
                            <h3>Multimodal</h3>
                            <p>The Ultimate Fusion</p>
                            <div className={styles.vizContainer}>
                                <Image
                                    src="/assets/tech_fusion.png"
                                    alt="Fusion Core"
                                    fill
                                    className={styles.vizImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
