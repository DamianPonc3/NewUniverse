import React, {useState} from "react";
import Button from 'react-bootstrap/Button'


function ItemCount({stock}){

    const [count, setCount] = useState(0);

    function adding(){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function subs() {
        if(count > 0){
            setCount(count - 1);
        }
    }

    function onAdd(){
        alert("Agregaste " + count + " un producto a la compra") 
    }

    return(
        <div>
            <div>
                <Button onClick={subs} variant= "danger">-</Button>
                <p>{count}</p>
                <Button onClick={adding} variant="success">+</Button>
                <Button onClick={onAdd} variant="primary">Comprar</Button>
            </div>
        </div>
    )
}

export default ItemCount