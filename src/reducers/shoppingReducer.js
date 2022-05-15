import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products: [
        {id: 1, name: "Pack 1 - Sidney", price: 1005000},
        {id: 2, name: "Pack 2 - Barcelona", price: 1050000},
        {id: 3, name: "Pack 3 - París", price: 1100000},
        {id: 4, name: "Pack 4 - New York", price: 1200000},
        {id: 5, name: "Pack 5 - Roma", price: 1500000},
        {id: 6, name: "Pack 6 - Madrid", price: 1200000},
    ],
    cart:[],
};

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newitem = state.products.find(product => product.id === action.payload);

            let iteminCart = state.cart.find(item => item.id === newitem.id);

            return iteminCart ? {
                ...state,
                cart: state.cart.map(item=>item.id===newitem.id ? {...item, quantity: item.quantity + 1}: item)
            } 
            : {...state,
                cart: [...state.cart, {...newitem, quantity: 1}],};
        }

        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity: item.quantity -1} : item),
            } : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };

        };  
        case TYPES.REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;

        default:
            return state;
    }
}