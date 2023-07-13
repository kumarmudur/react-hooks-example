import { useEffect, useRef, useState } from "react";

const withDimensions = (Component) => {
    return function WithDimensions(props) {
        const [width, setWidth] = useState(null);
        const [height, setHeight] = useState(null);
        const componentRef = useRef();

        useEffect(() => {
            if (componentRef.current) {
                setWidth(componentRef.current.offsetWidth);
                setHeight(componentRef.current.offsetHeight);
            }
        }, [componentRef]);
       return <Component ref={componentRef} height={height} width={width} {...props} />
    }
};

export default withDimensions;
