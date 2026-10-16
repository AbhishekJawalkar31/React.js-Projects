import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import CartProvider from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeProvider from './context/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
