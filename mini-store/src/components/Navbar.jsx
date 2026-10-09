import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
        <div>MiniStore</div>

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