import React from 'react'
import "./HomePage.css"
import Product from '../ProductComponent/Product'
const HomePage = ({ products }) => {
    return (
        <main className="container mt-4">
            <div className="product-container">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        // name={product.name}
                        // price={product.price}
                        // imageUrl={product.imageUrl}
                        // id={product.id}
                        product={product}
                    />
                ))}
            </div>
        </main>
    )
}

export default HomePage