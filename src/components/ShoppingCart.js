import {useReducer} from "react";
import { TYPES } from "../actions/shoppingAction";
import {shoppingInitialState, shoppingReducer} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
    const[state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state;

    const addToCart = (id) =>{
        console.log(id)
        dispatch({type:TYPES.ADD_TO_CART, payload: id})
    };

    const delFromCart =(id, all = false) =>{
        console.log(id, all)
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
        }else{
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
        }
    };

    const clearCart =() =>{
        dispatch({type: TYPES.CLEAR_CART})
    };

return (
    <div className="cart-container">
        <h2>Nuestros packs de viajes a precios increibles:</h2>
        <article className='box-pack'>
            {products.map((product)=> (<ProductItem key={product.id} data={product} addToCart={addToCart} />))}
        </article>
        <h3>¡Tu proximo viaje a solo un click!</h3>
        <article className='box-button'>
        <button onClick={clearCart}>Empezá de nuevo</button>
        {
            cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
        }
        </article>
    </div>
)
}

export default ShoppingCart;