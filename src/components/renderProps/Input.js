import React, { useState } from 'react';

const Input = ({ renderText }) => {
    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input value={value} onChange={handleChange} />
            <br />
            {renderText(value)}
        </div>
    );
};

export default Input;