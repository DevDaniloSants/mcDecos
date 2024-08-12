import { MdDone } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/redux.hooks'
import { selectProductTotalPrice, toggleCart } from '../../store/cart/CartSlice'

import Button from '../button/button.components'
import CartItem from '../cart-item/cart-item.components'

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

const Cart = () => {
    const { isVisible, products } = useAppSelector((state) => state.cartReducer)
    const productTotalPrice = useAppSelector(selectProductTotalPrice)

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
                {products.length > 0 ? (
                    <Products>
                        {products.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                    </Products>
                ) : (
                    <Products>
                        <span>O Carrinho está vazio</span>
                    </Products>
                )}
                <Actions>
                    <Price>
                        <PriceTitle>Total</PriceTitle>
                        <TotalPrice>R$ {productTotalPrice}</TotalPrice>
                    </Price>
                    <Button startIcon={<MdDone />}>Finalizar pedido</Button>
                </Actions>
            </CartContent>
        </CartContainer>
    )
}

export default Cart
