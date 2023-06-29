import React, { useEffect, useState } from 'react';

const Counter1 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = () => setCount(count + 1);

    const onChangeName = (event) => setName(event.target.value);

    useEffect(() => {
        console.log('useEffect - updating document title');
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input type='text' value={name} onChange={onChangeName} />
            <h1>{count} times</h1>
            <button onClick={increment}>Click</button>
        </div>
    );
};

export default Counter1;