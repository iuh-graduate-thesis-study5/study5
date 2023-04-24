import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = () => {
    const a = new Date('2023-04-23 12:50:28');
    const newDateObj = moment(a).add(60, 'm').toDate();

    const startTime = new Date();
    const endTime = newDateObj;
    const difference = endTime.getTime() - startTime.getTime();
    const resultInMinutes = difference / 60000;
    const resultSecond = Math.round((resultInMinutes % 1) * 60);
    const [minutes, setMinutes] = useState(Math.round(resultInMinutes));
    const [seconds, setSeconds] = useState(resultSecond);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {minutes === 0 && seconds === 0 ? null : (
                <h1>
                    {' '}
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            )}
        </div>
    );
};

export default Timer;
