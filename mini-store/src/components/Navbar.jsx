import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
        <h1>MiniStore</h1>

        <Link to='/'>
            <p>Home</p>
        </Link>

        <Link to='/cart'>
            <p>Cart</p>
        </Link>
    </>
  )
}

export default Navbar