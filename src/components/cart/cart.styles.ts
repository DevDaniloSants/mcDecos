import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

interface CartContainerProps {
    isVisible: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
    position: fixed;
    width: 100dvw;
    height: 100dvh;
    right: 0;
    border: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: flex-end;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    transition:
        visibility 0.3s,
        opacity 0.3s;
`

export const CartEscapeArea = styled.div``

export const CartContent = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: ${Colors.span.background};
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;

    & .products {
        flex: 9;
        display: flex;
        background-color: black;
    }
`

export const CartTitle = styled.span`
    flex: 0;
    font-size: 20px;
    padding: 1rem;
`

export const Actions = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
        flex: 1;
    }
`

export const Price = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const PriceTitle = styled.span`
    color: ${Colors.button.background};
    font-size: 12px;
`

export const TotalPrice = styled.span`
    font-size: clamp(24px, 5vw, 32px);
`
