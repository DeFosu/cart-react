import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function Navbar() {
  const { openCart, 
          cartQuantity
           } = useShoppingCart()

  return (
    <NavbarBs  sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
                <Nav className='me-auto' style={{fontSize:"1.4rem",
                                                 fontWeight:'800'}}>
                        <Nav.Link to="cart-react/" as={NavLink} >Home</Nav.Link>   
                        <Nav.Link to="cart-react/store" as={NavLink} >Store</Nav.Link>   
                        <Nav.Link to="cart-react/about" as={NavLink} >About</Nav.Link>   

                </Nav>
                <Button variant="dark" onClick={openCart} style={{position:"relative"}}>
                        <AiOutlineShoppingCart size={24} />
                        { cartQuantity !== 0 && 
                          <div className="rounded-circle 
                          bg-danger 
                          d-flex 
                          justify-content-center 
                          align-items-center"
                          style={{ color: "white",
                                   fontSize:".82rem",
                                   fontWeight:"600",
                                   width: "1.5rem",
                                   height: "1.5rem",
                                   position: "absolute",
                                   right: "0",
                                   bottom: "0",
                                   transform: "translate(25%, 25%)"
                          }}>{cartQuantity}</div>
                        }
                </Button>
        </Container>
    </NavbarBs>
  )
}
