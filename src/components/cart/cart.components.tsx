import { MdDone } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/redux.hooks'
import { toogleCart } from '../../store/cart/CartSlice'

import Button from '../button/button.components'

import {
    Actions,
    CartContainer,
    CartContent,
    CartEscapeArea,
    CartTitle,
    CloseCartButton,
    Price,
    PriceTitle,
    TotalPrice,
} from './cart.styles'
import { IoIosArrowBack } from 'react-icons/io'

const Cart = () => {
    const { isVisible } = useAppSelector((state) => state.cartReducer)

    const dispatch = useDispatch()

    const handleEscapeClick = () => {
        dispatch(toogleCart())
    }

    return (
        <CartContainer $isvisible={isVisible}>
            <CartEscapeArea onClick={handleEscapeClick} />
            <CartContent>
                <CloseCartButton>
                    <IoIosArrowBack />
                </CloseCartButton>
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
