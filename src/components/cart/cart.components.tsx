import { MdDone } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'

import CartForm from '../../types/cartForm.types'
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

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm<CartForm>()

    console.log(errors)

    const dispatch = useDispatch()

    const handleEscapeClick = () => {
        dispatch(toggleCart())
    }

    const handleFinish: SubmitHandler<CartForm> = (data) => {
        console.log(data)
        resetField('address')
        resetField('paymentType')
    }

    return (
        <CartContainer $isvisible={isVisible}>
            <CartEscapeArea onClick={handleEscapeClick} />
            <CartContent onSubmit={handleSubmit(handleFinish)}>
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
                                <label
                                    className={errors.address && 'input-error'}
                                >
                                    <span>Endereço</span>
                                    <input
                                        type="text"
                                        placeholder="R. Exemplo Nº 0 - Bairro"
                                        {...register('address', {
                                            required: true,
                                            minLength: 6,
                                        })}
                                    />
                                </label>
                            </AddressField>
                            <PaymentTypeSelector>
                                {paymentOptions.map((option) => (
                                    <label
                                        key={option.value}
                                        className={
                                            errors.paymentType && 'input-error'
                                        }
                                    >
                                        <input
                                            type="radio"
                                            value={option.value}
                                            {...register('paymentType', {
                                                required: true,
                                            })}
                                        />
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
