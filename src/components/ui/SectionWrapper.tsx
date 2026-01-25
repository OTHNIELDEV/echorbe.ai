"use client";

import React from 'react';
import styles from './SectionWrapper.module.css';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    background?: 'dark' | 'darker';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    id,
    className,
    background = 'dark'
}) => {
    return (
        <section
            id={id}
            className={clsx(
                styles.section,
                background === 'darker' && styles.darker,
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </section>
    );
};
