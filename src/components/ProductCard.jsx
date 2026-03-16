import { useState } from "react"


export default function ProductCard({ product, addToCart }) {
    const [qty, setQty] = useState(1)
    
    return (
        <div className="product">
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.id} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} min="1" step="1" />
            <button onClick={() => addToCart(product, qty)}>Add to cart</button>
        </div>
    )
}