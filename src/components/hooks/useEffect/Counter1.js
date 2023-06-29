import React, { useEffect, useState } from 'react';

const Counter1 = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <h1>{count} times</h1>
            <button onClick={increment}>Click</button>
        </div>
    );
};

export default Counter1;