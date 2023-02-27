import React, { useEffect, useState } from 'react'

import "../test.css";
export default function Countdown() {
    const [timer, setTimer] = useState(0);
    const [target, setTarget] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date(target);
            const mills = date.getTime();
            setTimer(mills - 1)
            setTarget( mills -1)
        },1000)
        return () => clearInterval(interval);
    }, [target,timer])
    return (
        <div>
            <input type="datetime-local" onChange={(e) => setTarget(e.target.value)} />
            <p className='container'>{timer}</p>

        </div>
    )
}
