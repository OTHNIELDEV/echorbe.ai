"use client";

import React from 'react';
import styles from './Container.module.css';
import { clsx } from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
    as: Component = 'div',
    ...props
}) => {
    const Tag = Component as any;
    return (
        <Tag className={clsx(styles.container, className)} {...props}>
            {children}
        </Tag>
    );
};
