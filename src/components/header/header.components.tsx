import { FaHeart } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'

import { HeaderContainer, HeaderEnd, HeaderTitle } from './header.styles'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../store/cart/CartSlice'

const Header = () => {
    const dispatch = useDispatch()
    const handleCartToggle = () => {
        dispatch(toggleCart())
    }
    return (
        <HeaderContainer>
            <HeaderTitle>MC DECO'S</HeaderTitle>
            <HeaderEnd>
                <FaHeart />
                <MdOutlineShoppingCart onClick={handleCartToggle} />
            </HeaderEnd>
        </HeaderContainer>
    )
}

export default Header
