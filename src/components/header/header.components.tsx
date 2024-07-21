import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { MdOutlineShoppingCart } from 'react-icons/md'

import { selectProductsQuantity, toggleCart } from '../../store/cart/CartSlice'
import { useAppSelector } from '../../hooks/redux.hooks'

import {
    CartButton,
    FavoriteButton,
    HeaderContainer,
    HeaderEnd,
    HeaderTitle,
} from './header.styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const productsTotalQuantity = useAppSelector(selectProductsQuantity)

    const handleCartToggle = () => {
        dispatch(toggleCart())
    }

    const handleNavigateToFavorites = () => {
        navigate('/favorites')
    }

    const handleNavigateToCategory = () => {
        navigate('/category')
    }

    return (
        <HeaderContainer>
            <HeaderTitle onClick={handleNavigateToCategory}>
                MC DECO'S
            </HeaderTitle>
            <HeaderEnd>
                <FavoriteButton onClick={handleNavigateToFavorites}>
                    <FaHeart />
                    <span>0</span>
                </FavoriteButton>
                <CartButton onClick={handleCartToggle}>
                    <MdOutlineShoppingCart />
                    <span>{productsTotalQuantity}</span>
                </CartButton>
            </HeaderEnd>
        </HeaderContainer>
    )
}

export default Header
