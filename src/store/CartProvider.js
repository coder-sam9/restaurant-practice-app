import CartContext from "./cart-context";

const CartProvider=(props)=>{
    const initialState={
        items:[],
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
    return (
        <CartContext.Provider value={initialState}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;