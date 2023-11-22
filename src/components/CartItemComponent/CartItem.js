import { useState } from "react";
import "./CartItem.css"
import { useContext } from 'react';
import { CartContext } from "../../CartContext";
const CartItem = ({ product }) => {
    let name = product.name
    let price = product.price
    let imageUrl = product.imageUrl
    let quantity = product.quantity
    let id = product.id
    const [count, setCount] = useState(quantity);
    const { increaseItem, decreaseItem } = useContext(CartContext);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        increaseItem({ name, price, imageUrl, quantity: count, id });
    }
    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
            decreaseItem({ name, price, imageUrl, quantity: count, id });
        }
    }
    return (
        <div className="cart-item">
            <div className="row">
                <div className="col-md-3">
                    <img className="img-class img-fluid" src={process.env.PUBLIC_URL + imageUrl} alt="Product 1" />
                </div>
                <div className="col-md-6">
                    <h4>{name}</h4>
                    <p>Price: $ {price}</p>
                </div>
                <div className="col-md-3 text-center">
                    <p>Quantity: {count}</p>
                    <p>Total: ${price * count}</p>
                    <div className="quantity-buttons">
                        <button className="btn btn-sm btn-primary" onClick={decrement}>
                            -
                        </button>
                        <button className="btn btn-sm btn-primary" onClick={increment}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem