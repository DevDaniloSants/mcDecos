import { MdDone } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../hooks/redux.hooks'
import { selectProductTotalPrice, toggleCart } from '../../store/cart/CartSlice'

import Button from '../button/button.components'
import CartItem from '../cart-item/cart-item.components'

import {
    Actions,
    AddressField,
    CartContainer,
    CartContent,
    CartEscapeArea,
    CartTitle,
    CloseCartButton,
    PaymentDetails,
    PaymentTypeSelector,
    Price,
    PriceTitle,
    Products,
    TotalPrice,
} from './cart.styles'

import cardImage from '../../assets/card.svg'
import pixImage from '../../assets/pix.svg'
import moneyImage from '../../assets/money.svg'

const paymentOptions = [
    {
        value: 'card',
        imgSrc: cardImage,
        alt: 'Cartão',
        label: 'Cartão',
        name: 'Cartão',
    },
    { value: 'pix', imgSrc: pixImage, alt: 'Pix', label: 'Pix', name: 'Pix' },
    {
        value: 'money',
        imgSrc: moneyImage,
        alt: 'Dinheiro',
        label: 'Dinheiro',
        name: 'Dinheiro',
    },
]

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
                    <>
                        <Products>
                            {products.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                        </Products>
                        <PaymentDetails>
                            <AddressField>
                                <label>
                                    <span>Endereço</span>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="R. Exemplo Nº 0 - Bairro"
                                    />
                                </label>
                            </AddressField>
                            <PaymentTypeSelector>
                                {paymentOptions.map((option) => (
                                    <label key={option.value}>
                                        <input type="radio" name="payment" />
                                        <img
                                            src={option.imgSrc}
                                            alt={option.alt}
                                        />
                                        <span>{option.label}</span>
                                    </label>
                                ))}
                            </PaymentTypeSelector>
                        </PaymentDetails>
                        <Actions>
                            <Price>
                                <PriceTitle>Total</PriceTitle>
                                <TotalPrice>R$ {productTotalPrice}</TotalPrice>
                            </Price>
                            <Button startIcon={<MdDone />} type="submit">
                                Finalizar pedido
                            </Button>
                        </Actions>
                    </>
                ) : (
                    <Products>
                        <span>O Carrinho está vazio</span>
                    </Products>
                )}
            </CartContent>
        </CartContainer>
    )
}

export default Cart
