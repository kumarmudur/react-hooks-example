import React, { useState } from 'react';

const Counter2 = () => {
    const initialCount = 0;
    const [count, setCount]  = useState(initialCount);

    const increment = () => setCount(prevCount => prevCount + 1);

    const decrement = () => setCount(prevCount => prevCount - 1);

    const reset = () => setCount(initialCount);

    const incrementFive = () => {
        for (let  i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        };
    }

    return (
        <div>
            <h1>Count: { count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={incrementFive}>Increment5</button>
        </div>
    );
};

export default Counter2;