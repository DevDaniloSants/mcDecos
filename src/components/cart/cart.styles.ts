import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

interface CartContainerProps {
    $isvisible: boolean
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
    visibility: ${(props) => (props.$isvisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$isvisible ? '1' : '0')};
    transition:
        visibility 0.3s,
        opacity 0.3s;
`

export const CartEscapeArea = styled.div`
    width: 100%;
`

export const CartContent = styled.div`
    height: 100%;
    min-width: 500px;
    z-index: 200;
    background-color: ${Colors.span.background};
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;

    @media (max-width: 768px) {
        min-width: 100%;
    }
`
export const Products = styled.div`
    flex: 9;
    display: flex;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #888886 #1f1f1f;
    flex-direction: column;
    gap: 1rem;
`

export const CloseCartButton = styled.span`
    position: absolute;
    top: 28px;
    left: 8px;
    visibility: hidden;

    @media (max-width: 768px) {
        visibility: visible;
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
    color: ${Colors.primary};
    font-size: 12px;
`

export const TotalPrice = styled.span`
    font-size: clamp(24px, 5vw, 32px);
`
