import React from 'react';
import styles from './axises.module.scss';

export interface IAxisesProps {
    count?: number;
}

const getVGrid = (count: number) => (
    <div className={styles.vGrid}>
        {new Array(count).fill(null).map((item, index) => (
            <div key={index} className={styles.vGridLine} />
        ))}
    </div>
);

const getHGrid = (count: number) => (
    <div className={styles.hGrid}>
        {new Array(count).fill(null).map((item, index) => (
            <div key={index} className={styles.hGridLine} />
        ))}
    </div>
);

export const Axises = ({ count = 0 }: IAxisesProps) => (
    <div className={styles.axises}>
        <div className={styles.back}>
            {getVGrid(count)}
            {getHGrid(10)}
        </div>
        {getVGrid(count)}
    </div>
);
