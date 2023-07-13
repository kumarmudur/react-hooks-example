import React, { forwardRef } from 'react';
import './style.css';

import withDimensions from './WithDimensions';

const Component1 = (props, forwardRefFromParent) => {
    return (
        <div ref={forwardRefFromParent} className='comp1'>
            Hey I am component1 and my width is: { props.width}
        </div>
    );
};

export default withDimensions(forwardRef(Component1));