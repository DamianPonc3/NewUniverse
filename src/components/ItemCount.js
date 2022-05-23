import React, {useState} from "react";

export default function ItemCount(props) {
    const [count, setCount] = useState(1);

    const sumar = () => {setCount(count + 1)};
    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        };
    };
    return (
        <>
        <div className="title"><h3>{count}</h3></div>
        <div className="container-count">
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
        </>
    )
};

    ItemCount.defaultProps = {

    }