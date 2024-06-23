import { FaHeart } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'

import { HeaderContainer, HeaderEnd, HeaderTitle } from './header.styles'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>MC DECO'S</HeaderTitle>
            <HeaderEnd>
                <FaHeart />
                <MdOutlineShoppingCart />
            </HeaderEnd>
        </HeaderContainer>
    )
}

export default Header
