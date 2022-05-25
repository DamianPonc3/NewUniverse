import React, {useEffect, useState} from 'react'
import customFetch from '../reducers/CustomFetch';
import productos from "../reducers/productos";
import ItemList from "./ItemList";


function ItemListContainer() {
    const [items, setItems] = useState([]); 

    useEffect(() =>{
        customFetch(2000, productos)
        .then(resultado => setItems(resultado))
    }, [items]);
  return (
    <div>
        <ItemList productos={items} />
    </div>
  )
}

export default ItemListContainer