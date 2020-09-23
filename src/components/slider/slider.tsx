import React from 'react';
import { Axises } from './axises/axises';
import { Bar } from './bar/bar';
import styles from './slider.module.scss';

const data = [
    [100, 80, 60, 50, 45, 40],
    [80, 90, 50, 55, 15, 60],
    [90, 70, 10, 0, 100, 90],
    [10, 15, 20, 30, 50, 80],
];

export class Slider extends React.PureComponent {
    state = {
        index: 0,
    };

    onNextClick = () => {
        const index = this.state.index >= data.length - 1 ? 0 : this.state.index + 1;
        this.setState({ index });
    };

    onPrevClick = () => {
        const index = this.state.index <= 0 ? data.length - 1 : this.state.index - 1;
        this.setState({ index });
    };

    public render() {
        return (
            <div className={styles.slider}>
                <div className={styles.arrowLeft} onClick={this.onNextClick} />
                <div className={styles.arrowRight} onClick={this.onPrevClick} />

                <div className={styles.content}>
                    <Axises count={data[this.state.index].length} />

                    {data[this.state.index].map((item, index) => (
                        <Bar key={index} percent={item} />
                    ))}
                </div>
            </div>
        );
    }
}
