import React from 'react';
import styles from './bar.module.scss';

export interface IBarProps {
    percent?: number;
}

export const MAX_SIZE = 300;

export const Bar = ({ percent = 0 }: IBarProps) => {
    const size = 300 * percent / 100;

    return (
        <div className={styles.bar}>
            <div className={styles.back} style={{ width: size }} />
            <div className={styles.left} style={{ height: size }} />
            <div className={styles.front} style={{ width: size }} />
            <div className={styles.right} style={{ height: size }} />
            <div className={styles.projector} style={{ width: size }} />
        </div>
    );
}
