import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router"
import ProductCard from './ProductCard'

export default function ShopPage() {
    const { cart, setCart } = useOutletContext();
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

    function addToCart(product, qty) {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id)

            if (exists) {
                return prev.map(item => 
                    item.id === product.id ? {...item, qty: item.qty + qty} : item
                )
            }

            return [...prev, {...product, qty}]
        })
    }

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1>Shop Page</h1>
            <div className="products-container">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </div>
        </>
    )
}