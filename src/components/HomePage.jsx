import { Link } from "react-router"

export default function HomePage() {
    return (
        <>
            <h1>Welcome!</h1>
            <Link to="/shop">Go to shop</Link>
        </>
    )
}