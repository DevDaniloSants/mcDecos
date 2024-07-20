import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import CartProducts from '../../types/cartProducts.types'

import { removeProduct } from '../../store/cart/CartSlice'

import {
    Actions,
    Container,
    Image,
    Informations,
    IngredientsText,
    Price,
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
                </Actions>
            </Informations>
        </Container>
    )
}

export default CartItem
