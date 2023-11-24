import { Button, Image, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import formatCurrentcy from '../utilities/formatCurrentcy'

type CartItemProps = {
        id: number
        quantity: number
}
export default function CartItem({id, quantity}:CartItemProps) {
        const {removeFromCart} = useShoppingCart()
        const item = storeItems.find(i => i.id === id)
        if(item == null) return null
        return (
                <Stack direction='horizontal' gap={2}>
                        <Image src={`${item.imgUrl}`} width={125} height={75} rounded  style={{objectFit:"cover"}}/>
                        <div className="me-auto" style={{fontWeight:"500"}}>
                                <div>
                                        {item.name} <span className='text-muted' style={{fontSize:".75rem"}}>x{quantity}</span>
                                </div>
                                <div className='text-muted' style={{fontSize:".9rem"}}>
                                        {formatCurrentcy(item.price)}
                                </div>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                                {formatCurrentcy(item.price*quantity)}
                                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                                        &times;
                                </Button>
                        </div>
                </Stack>
        )
}
