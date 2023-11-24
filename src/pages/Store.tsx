import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
import storeItems from "../data/items.json"

export default function Store() {
  return (
    <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3}>
                {storeItems.map(item => (
                        <Col key={item.id} className='mt-2 mb-2'><StoreItem {...item} /></Col>
                ))}
        </Row>
    </>
  )
}
