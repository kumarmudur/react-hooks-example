import React, { useState, useEffect, useCallback} from 'react';

const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    const tick = useCallback(() => setCount(count + 1), [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count, tick]);

    return (
        <div>
            { count}
        </div>
    );
};

export default IntervalCounter;