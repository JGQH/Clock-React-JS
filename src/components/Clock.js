import Hand from './Hand';
import { useState, useEffect } from 'react';

function format(value){
    let value_ = Math.floor(value);
    if(value_ < 10){
        return `0${value_}`;
    }
    return value_
}

const Clock = params => {
    let center = params.size / 2

    let r3 = center
    let r2 = center * 3 / 4
    let r1 = center / 2

    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            const current = new Date();

            const realSeconds = current.getSeconds() + (current.getMilliseconds() / 1000);
            const realMinutes = current.getMinutes() + (realSeconds / 60);
            const realHours = current.getHours() + (realMinutes / 60)

            setSeconds(realSeconds);
            setMinutes(realMinutes);
            setHours(realHours);
        }, 100)

        return () => clearInterval(interval);
    });

    return (
        <svg width={params.size} height={params.size}>
            <Hand x={center} y={center} radius={r3 - 5} value={360 * (seconds / 60)} color="#446688"/>
            <Hand x={center} y={center} radius={r2 - 5} value={360 * (minutes / 60)} color="#668844"/>
            <Hand x={center} y={center} radius={r1 - 5} value={360 * (hours / 24)} color="#884466"/>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{`${format(hours)}:${format(minutes)}:${format(seconds)}`}</text>
        </svg>
    );
}

export default Clock;