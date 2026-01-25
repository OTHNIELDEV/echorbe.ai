'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import styles from './NewsRoom.module.css';
import { newsData } from '@/data/newsData';

export default function NewsPage() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.section}>
                <Container>
                    <div className={styles.header}>
                        <h1 className={styles.title}>NewsRoom</h1>
                        <p className={styles.subtitle}>Latest updates, press releases, and stories from Echorbe</p>
                    </div>

                    <div className={styles.grid}>
                        {newsData.map((item) => (
                            <Link href={`/news/${item.id}`} key={item.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardCategory}>{item.category}</span>
                                    <span className={styles.cardDate}>{item.date}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardSummary}>{item.summary}</p>

                                <div className={styles.cardDivider}></div>
                                <div className={styles.readMore}>Read Article -&gt;</div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
