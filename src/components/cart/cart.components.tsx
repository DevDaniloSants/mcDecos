import { MdDone } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { VscError } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

import { useAppSelector } from '../../hooks/redux.hooks'
import {
    clearProducts,
    selectProductTotalPrice,
    toggleCart,
} from '../../store/cart/CartSlice'

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
    Errors,
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
import CartForm from '../../types/cartForm.types'
import isRestaurantOpenHelper from '../../helpers/isRestaurantOpenHelper'

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

    const isOpen = isRestaurantOpenHelper()

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm<CartForm>()

    const dispatch = useDispatch()

    const handleEscapeClick = () => {
        dispatch(toggleCart())
    }

    const handleOrderSubmission: SubmitHandler<CartForm> = async (data) => {
        if (!isOpen) {
            toast.error('O Restaurante está fechado!')
            return
        }

        await toast.success('Pedido realizado com sucesso')

        const phone = import.meta.env.VITE_PHONE_MESSAGE

        const orderSummary = products
            .map((item) => {
                return `${item.displayName} Quantidade: (${item.quantity}) Preço: R$${item.quantity * item.price} | `
            })
            .join('')

        const message = encodeURIComponent(orderSummary)

        resetField('address')
        resetField('paymentType')

        window.open(
            `https://wa.me/${phone}?text=${message} Endereço: ${data.address}  Tipo de Pagamento: ${data.paymentType} TOTAL: R$${productTotalPrice}`,
            '_blank'
        )

        dispatch(clearProducts())
    }

    return (
        <CartContainer $isvisible={isVisible}>
            <ToastContainer theme="dark" />
            <CartEscapeArea onClick={handleEscapeClick} />
            <CartContent onSubmit={handleSubmit(handleOrderSubmission)}>
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
                                    className={
                                        errors.address ? 'input-error' : ''
                                    }
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
                                            value={option.name}
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
                            <Button
                                startIcon={<MdDone />}
                                type="submit"
                                isOpen={isOpen}
                            >
                                Finalizar pedido
                            </Button>
                        </Actions>
                        {errors ? (
                            <Errors>
                                {errors?.address?.type === 'required' && (
                                    <span className="error">
                                        <VscError />
                                        <p>O endereço é obrigatório.</p>
                                    </span>
                                )}
                                {errors?.address?.type === 'minLength' && (
                                    <span className="error">
                                        <VscError />
                                        <p>
                                            O endereço precisa ter no mínimo 6
                                            caracteres.
                                        </p>
                                    </span>
                                )}
                                {errors?.paymentType?.type === 'required' && (
                                    <span className="error">
                                        <VscError />
                                        <p>Escolha o método de pagamento.</p>
                                    </span>
                                )}
                            </Errors>
                        ) : (
                            ''
                        )}
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
