import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ beginTime }) => {
    const a = new Date(beginTime);
    const newDateObj = moment(a).add(60, 'm').toDate();
    const startTime = new Date();
    const endTime = new Date(newDateObj);
    let difference = endTime.getTime() - startTime.getTime();
    if (!difference) {
        difference = 0;
    }
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
