import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="store-header">
      <h1 className="store-title">MiniStore</h1>

      <nav className="store-navigation" aria-label="Main navigation">
        <Link to='/'>
            <p>Home</p>
        </Link>

        <Link to='/cart'>
            <p>Cart</p>
        </Link>
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
      </button>
    </header>
  )
}

export default Navbar