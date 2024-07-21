import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'

import CartProducts from '../../types/cartProducts.types'

import {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProduct,
} from '../../store/cart/CartSlice'

import {
    Actions,
    Container,
    Image,
    Informations,
    IngredientsText,
    Price,
    Quantity,
    RemoveButton,
    Title,
} from './cart-item.styles'

interface CartItemProps {
    product: CartProducts
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const dispatch = useDispatch()

    const handleRemoveProduct = () => {
        dispatch(removeProduct(product.id))
    }

    const handleIncreaseQuantity = () => {
        dispatch(increaseProductQuantity(product.id))
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseProductQuantity(product.id))
    }

    return (
        <Container>
            <Image src={product.imageUrl} />
            <Informations>
                <RemoveButton onClick={handleRemoveProduct}>
                    <IoMdClose />
                </RemoveButton>
                <Title>{product.displayName}</Title>
                <IngredientsText>
                    {product.ingredients && (
                        <>
                            {product?.ingredients
                                ?.map((ingredient) => ingredient.displayName)
                                .join(', ')}
                            .
                        </>
                    )}
                </IngredientsText>
                <Actions>
                    <Price>
                        <p>{product.quantity}X</p>
                        <p>R${product.price}</p>
                    </Price>
                    <Quantity>
                        <FaMinus onClick={handleDecreaseQuantity} />
                        <span>{product.quantity}</span>
                        <FaPlus onClick={handleIncreaseQuantity} />
                    </Quantity>
                </Actions>
            </Informations>
        </Container>
    )
}

export default CartItem
