import { MdDone } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/cart/CartSlice'

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
    Products,
    TotalPrice,
} from './cart.styles'
import { IoIosArrowBack } from 'react-icons/io'
import CartItem from '../cart-item/cart-item.components'

const Cart = () => {
    const { isVisible, products } = useAppSelector((state) => state.cartReducer)

    const dispatch = useDispatch()

    const handleEscapeClick = () => {
        dispatch(toggleCart())
    }

    return (
        <CartContainer $isvisible={isVisible}>
            <CartEscapeArea onClick={handleEscapeClick} />
            <CartContent>
                <CloseCartButton onClick={handleEscapeClick}>
                    <IoIosArrowBack />
                </CloseCartButton>
                <CartTitle>Meu Carrinho</CartTitle>
                <Products>
                    {products.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </Products>
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
