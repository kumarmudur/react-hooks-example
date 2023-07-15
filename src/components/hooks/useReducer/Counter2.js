import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
};

const reducer = (state, action) => {
    const { type, value} = action;
    switch(type) {
        case 'increment': 
            return { firstCounter: state.firstCounter + value };
        case 'decrement':
            return { firstCounter: state.firstCounter - value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const Counter2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - { count.firstCounter }</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement' , value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment5</button>
            <button onClick={() => dispatch({type: 'decrement' , value: 5})}>Decrement5</button>

            <button onClick={() => dispatch({type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter2;