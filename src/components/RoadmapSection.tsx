"use client";

import React from 'react';
import { Container } from './ui/Container';
import { SectionWrapper } from './ui/SectionWrapper';
import styles from './RoadmapSection.module.css';

const milestones = [
    {
        year: "Phase 1",
        title: "PictoMusic 런칭",
        desc: "생성형 오디오 엔진 배포 및 이미지-투-뮤직 MVP 출시.",
        subDesc: "Deployment of Generative Audio Engine."
    },
    {
        year: "Phase 2",
        title: "글로벌 OEM 파트너십",
        desc: "삼성/구글(Samsung/Google)과의 임베디드 AI 통합 협력.",
        subDesc: "Collaborations with Samsung/Google."
    },
    {
        year: "Phase 3",
        title: "센서 양산 (Mass Production)",
        desc: "보안 시장을 위한 3D TOF 센서 고수율 양산 시작.",
        subDesc: "High-yield manufacturing of 3D TOF sensors."
    },
    {
        year: "Phase 4",
        title: "10개 자회사 분사 (Spinoffs)",
        desc: "빠른 시장 점유를 위한 10개의 독립 법인 및 자회사 구조화.",
        subDesc: "Structuring independent subsidiaries."
    },
    {
        year: "Future",
        title: "기업가치 1조원 (Unicorn)",
        desc: "테크 지주회사로서의 IPO 및 글로벌 시장 지배력 확보.",
        subDesc: "Targeting IPO & Global Dominance."
    }
];

export const RoadmapSection = () => {
    return (
        <SectionWrapper id="roadmap" className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>Strategic Roadmap</h2>
                    <p className={styles.subtitle}>1조원 가치 달성을 위한 미래 로드맵 (Path to 1T KRW).</p>
                </div>

                <div className={styles.timeline}>
                    {milestones.map((item, index) => (
                        <div key={index} className={styles.milestone}>
                            <div className={styles.marker}></div>
                            <div className={styles.content}>
                                <span className={styles.phase}>{item.year}</span>
                                <h3 className={styles.milestoneTitle}>{item.title}</h3>
                                <p className={styles.milestoneDesc}>
                                    {item.desc}
                                    <span className={styles.subDesc}>{item.subDesc}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
};
