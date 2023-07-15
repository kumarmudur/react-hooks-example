import React from 'react';

import Input from './Input';

const Parent = () => {
    const showValue = value => <>This is a {value}</>;
    const multiplyValue = value => <>The multiplied value id {value * value}</>;
    
    return (
        <div>
          <Input 
            renderText={showValue}
          />
          <br />
          <Input 
           renderText={multiplyValue}
         /> 
        </div>
    );
};

export default Parent;