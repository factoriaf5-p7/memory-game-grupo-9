import { useState, useEffect } from 'react';

function Timer() {
    const [startTime, setStartTime] = useState<number>(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setStartTime(Date.now());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const currentTime = Date.now() - startTime;

    return (
        <div className="timer border-3 border-white bg-blue-200 rounded-10 w-14 h-14 text-center text-black shadow-md hover:scale-100 flex flex-col justify-center items-center">
            <p>Time: <br />
                {Math.floor(currentTime / 1000)} sec</p>
        </div>
    );
}

export default Timer;
