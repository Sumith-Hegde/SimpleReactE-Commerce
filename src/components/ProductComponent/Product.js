import "./Product.css"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../CartContext";
const Product = ({ product }) => {
    let price = product.price
    let name = product.name
    let imageUrl = product.imageUrl
    let id = product.id
    // console.log(price);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({ name, price, imageUrl, id });
    };
    return (
        <>
            <div className="product details">
                <Link className="nav-link" to={`/products/${id}`} >
                    {imageUrl && <img src={process.env.PUBLIC_URL + imageUrl} alt={name} />}
                    <h2>{name}</h2>
                    <p className="price">${price}</p>
                </Link>
                <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </>
    )
}

export default Product