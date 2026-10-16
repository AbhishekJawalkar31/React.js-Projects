import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <h1>MiniStore</h1>

      <Link to='/'>
          <p>Home</p>
      </Link>

      <Link to='/cart'>
          <p>Cart</p>
      </Link>

      <button onClick={() => toggleTheme()}>
        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
      </button>
    </>
  )
}

export default Navbar