import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ beginTime }) => {
    function calculateTimeLeft() {
        const difference = +new Date(beginTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
                giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
                phút: Math.floor((difference / 1000 / 60) % 60),
                giây: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(id);
        };
    });

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        return (
            <span>
                {timeLeft[interval]} {interval}{' '}
            </span>
        );
    });

    return <div>{timerComponents.length ? timerComponents : <span>Đã đến giờ thi</span>}</div>;
};

export default Timer;
