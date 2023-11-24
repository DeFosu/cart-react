import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import About from './pages/About'
import Home from './pages/Home'
import Store from './pages/Store'

export default function App() {
  return (
  <ShoppingCartProvider>
    <Navbar />
    <Container className='mb-4 h-100'>
      <Routes>
        <Route path="cart-react/" element={<Home/>} />
        <Route index path="cart-react/store" element={<Store/>} />
        <Route path="cart-react/about" element={<About/>} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}
