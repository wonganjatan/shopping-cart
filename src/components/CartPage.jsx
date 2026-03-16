import { useOutletContext } from "react-router"
import CartItem from "./CartItem"

export default function CartPage() {
    const { cart, setCart} = useOutletContext()

    function removeItem(id) {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    return (
        <>
            <h1>Cart Page</h1>
            <div className="products-container">
                {cart.map(item => (
                    <CartItem key={item} item={item} removeItem={removeItem}/>
                ))}
            </div>
        </>
    )
}