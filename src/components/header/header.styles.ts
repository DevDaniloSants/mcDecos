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
    cursor: pointer;
`

export const HeaderEnd = styled.div`
    display: flex;
    gap: 1.5rem;

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
        font-size: 14px;
        top: 0;
        color: ${Colors.primary};
        padding-left: 4px;
    }
`

export const FavoriteButton = styled.div`
    cursor: pointer;
    position: relative;
    & span {
        position: absolute;
        font-size: 14px;
        padding-left: 4px;
        top: 0;
        color: ${Colors.primary};
    }
`
