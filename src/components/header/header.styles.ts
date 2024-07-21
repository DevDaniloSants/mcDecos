import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
`

export const HeaderTitle = styled.h1`
    font-size: 1em;
    font-weight: 400;
`

export const HeaderEnd = styled.div`
    display: flex;
    gap: 1rem;

    & svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
`

export const CartButton = styled.div`
    cursor: pointer;
    position: relative;
    & span {
        position: absolute;
        font-size: 12px;
        top: 0;
        color: ${Colors.primary};
    }
`
