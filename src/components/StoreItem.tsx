import { Button, Card } from "react-bootstrap"

import { formatCurrency } from '../../utilities/formatCurrency'
import { useShoppingCart } from "../context/shoppingContext"

type StoreItemProps = {
    id: string,
    name: string,
    price: number,
    imgUrl: string
}


export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

    const quantity = getItemQuantity(id)


    console.log(quantity)
    return <>
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                // height="200px"
                style={{ objectFit: "cover" }}
                alt={imgUrl}
            />
            <Card.Body>
                <Card.Title>
                    <span>{name}</span>
                    <span>{formatCurrency(price)}</span>
                </Card.Title>
                <div>
                    {quantity === 0
                        ? (<Button onClick={ () => increaseCartQuantity(id) } >+ Add To Cart</Button>)
                        : (
                            <div>
                                <div style={ {display: "flex"} }>
                                    <Button onClick={() => decreaseCartQuantity(id) } >-</Button>
                                    <div>
                                        <span> {quantity}  </span> in cart
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(id)} >+</Button>
                                </div>
                                <Button onClick={() => removeFromCart(id)} variant="danger">Remove</Button>
                            </div>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    </>
}