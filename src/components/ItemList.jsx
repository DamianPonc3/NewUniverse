import React from "react";
import Item from "./Item";

function ItemList ({productos}){
    return(
        productos.map(p =>(
            <Item
                key = {p.id}
                name = {p.name}
                imagen = {p.imagen}
                price = {p.price}
                stock ={p.stock}
            />
        ))
    )
}

export default ItemList;