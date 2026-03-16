import { useState } from "react"

export default function CartItem({ item, removeItem }) {
    const [qty, setQty] = useState(item.qty)

    return (
        <div className="product">
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.id} />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.qty}</p>
            <input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} min="1" max={item.qty} step="1" />
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
    )
}