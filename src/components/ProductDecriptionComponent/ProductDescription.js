import "./ProductDescription.css"
import { useContext } from 'react';
import { CartContext } from "../../CartContext";
import { useParams } from "react-router-dom";
import products from "../../products.json"
const ProductDescription = () => {
    const getProductById = (productId) => {
        return products.find(product => product.id === parseInt(productId, 10));
    };
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = getProductById(id);
    const handleAddToCart = () => {
        addToCart(product);
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + product.imageUrl} alt="Product" className="img-fluid image" />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="text-muted">Category: Category Name</p>
                    <p className="lead">Price: ${product.price}</p>
                    <hr />
                    <div>
                        <h4>Description:</h4>
                        <p className="multiLine">{product.description}</p>
                    </div>
                    <hr />
                    <h4>Features:</h4>
                    <ul>
                        {product.features && <div>
                            {product.features.map((feature, index) => (
                                <li>{feature}</li>
                            ))}
                        </div>}
                    </ul>
                    <hr />
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription