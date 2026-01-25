'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from './ui/Container';
import styles from './NewsSection.module.css';
import { newsData } from '../data/newsData';

export const NewsSection = () => {
    // Top 5 news items
    const latestNews = newsData.slice(0, 5);

    return (
        <section className={styles.section} id="news">
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>NewsRoom</h2>
                    <p className={styles.subtitle}>Updates from the Echorbe Universe</p>
                </div>

                <div className={styles.newsList}>
                    {latestNews.map((item) => (
                        <Link href={`/news/${item.id}`} key={item.id} className={styles.newsItem}>
                            <div className={styles.itemHeader}>
                                <span className={styles.itemCategory}>{item.category}</span>
                                <span className={styles.itemDate}>{item.date}</span>
                            </div>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemSummary}>{item.summary}</p>
                        </Link>
                    ))}
                </div>

                <div className={styles.moreButtonWrapper}>
                    <Link href="/news" className={styles.moreButton}>
                        Visit NewsRoom
                    </Link>
                </div>
            </Container>
        </section>
    );
};
