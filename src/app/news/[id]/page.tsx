import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import styles from './NewsDetail.module.css';
import { newsData } from '@/data/newsData';

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = newsData.find((n) => n.id === id);

    if (!item) {
        return notFound();
    }

    return (
        <main className={styles.main}>
            <Navbar />

            <Container>
                <article className={styles.articleContainer}>
                    <Link href="/#news" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        Back to NewsRoom
                    </Link>

                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.category}>{item.category}</span>
                            <span className={styles.date}>{item.date}</span>
                        </div>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.summary}>{item.summary}</p>
                    </header>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: item.content || '' }}
                    />
                </article>
            </Container>

            <Footer />
        </main>
    );
}
