import { MdDone } from 'react-icons/md'

import {
    Actions,
    CartContainer,
    CartContent,
    CartEscapeArea,
    CartTitle,
    Price,
    PriceTitle,
    TotalPrice,
} from './cart.styles'
import Button from '../button/button.components'
import { useAppSelector } from '../../hooks/redux.hooks'
import { useEffect } from 'react'

const Cart = () => {
    const { isVisible } = useAppSelector((state) => state.cartReducer)

    useEffect(() => {
        console.log(isVisible)
    }, [isVisible])

    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea />
            <CartContent>
                <CartTitle>Meu Carrinho</CartTitle>
                <div className="products">products</div>
                <Actions>
                    <Price>
                        <PriceTitle>Total</PriceTitle>
                        <TotalPrice>R$ 1000</TotalPrice>
                    </Price>
                    <Button startIcon={<MdDone />}>Finalizar pedido</Button>
                </Actions>
            </CartContent>
        </CartContainer>
    )
}

export default Cart
