import "./Cart.css"
import CartItem from "../CartItemComponent/CartItem"
import { useContext } from 'react';
import { CartContext } from "../../CartContext";
const Cart = () => {
    const { cart, totalPrice, totalQuantity } = useContext(CartContext);
    return (
        <main className="container cartContainer mt-4">
            <h2>Your Shopping Cart</h2>
            <hr />
            {cart && cart.length >= 1 && < div >
                {
                    cart.map((product, index) => (
                        <>
                            <CartItem
                                key={index}
                                // name={product.name}
                                // price={product.price}
                                // imageUrl={product.imageUrl}
                                // quantity={product.quantity}
                                // id={product.id}
                                product={product}
                            />
                            <hr />
                        </>
                    ))
                }
            </div>}
            <div className="col-md-6 details">
                <div className="cart-total mt-4">
                    <h3>Cart Total</h3>
                    <hr />
                    <p>Total Items: {totalQuantity}</p>
                    <p>Order Total: ${totalPrice}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </main >
    )
}

export default Cart