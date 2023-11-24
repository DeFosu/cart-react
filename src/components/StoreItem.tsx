import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import formatCurrentcy from '../utilities/formatCurrentcy'

type StoreItemProps ={
        id: number,
        name: string,
        price: number,
        imgUrl: string
}

export default function StoreItem({id, name, price, imgUrl}:StoreItemProps) {
        const { getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart } = useShoppingCart()

        const quantity = getItemQuantity(id)

return (
        <Card key={id} className='h-100'>
                <Card.Img variant="top" src={`${imgUrl}`} height="200px" style={{objectFit:"cover"}}/>
                <Card.Body className='d-flex align-items-top justify-content-between'>
                        <Card.Title >{name}</Card.Title>
                        <Card.Subtitle>{formatCurrentcy(price)}</Card.Subtitle>
                </Card.Body>
                <Card.Body className='mt-auto'>
                        {quantity === 0 ? (
                                <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                        ): 
                        <div className="d-flex align-items-center flex-column gap-2">
                                <div className="d-flex align-items-center gap-3">
                                        <Button onClick={() => decreaseCartQuantity(id)}>
                                                -
                                        </Button>
                                        <div style={{fontSize:"1.2rem"}}><span style={{fontWeight:"500", fontSize:"1.3rem"}}>{quantity}</span> in cart</div>
                                        <Button onClick={() => increaseCartQuantity(id)}>
                                                +
                                        </Button>
                                </div>
                                <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                        }
                </Card.Body>
        </Card>
  )
}
