import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { MdOutlineShoppingCart } from 'react-icons/md'

import { selectProductsQuantity, toggleCart } from '../../store/cart/CartSlice'
import { useAppSelector } from '../../hooks/redux.hooks'

import {
    CartButton,
    HeaderContainer,
    HeaderEnd,
    HeaderTitle,
} from './header.styles'

const Header = () => {
    const dispatch = useDispatch()

    const productsTotalQuantity = useAppSelector(selectProductsQuantity)

    const handleCartToggle = () => {
        dispatch(toggleCart())
    }
    return (
        <HeaderContainer>
            <HeaderTitle>MC DECO'S</HeaderTitle>
            <HeaderEnd>
                <FaHeart />
                <CartButton onClick={handleCartToggle}>
                    <MdOutlineShoppingCart />
                    <span>{productsTotalQuantity}</span>
                </CartButton>
            </HeaderEnd>
        </HeaderContainer>
    )
}

export default Header
