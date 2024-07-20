import React from 'react'

import CartProducts from '../../types/cartProducts.types'

import {
    Actions,
    Container,
    Image,
    Informations,
    IngredientsText,
    Price,
    Title,
} from './cart-item.styles'

interface CartItemProps {
    product: CartProducts
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    return (
        <Container>
            <Image src={product.imageUrl} />
            <Informations>
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
