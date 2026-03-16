import { useState, useEffect } from 'react'

export default function ShopPage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Failed to fetch products", err)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <h1>Shop Page</h1>
            <div className="products-container">
                {products.map(product => (
                    <div className="product">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.id} />
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}