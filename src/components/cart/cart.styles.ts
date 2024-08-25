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

export const CartContent = styled.form`
    height: 100%;
    min-width: 500px;
    z-index: 200;
    background-color: ${Colors.span.background};
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
    overflow-y: scroll;

    @media (max-width: 768px) {
        min-width: 100%;
    }
`
export const Products = styled.div`
    flex: 9;
    display: flex;
    scrollbar-width: thin;
    scrollbar-color: #888886 #1f1f1f;
    flex-direction: column;
    overflow-y: auto;
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

export const PaymentDetails = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & input {
        height: 43px;
        outline: none;
        border: 1px solid ${Colors.input.border};
        background-color: ${Colors.input.background};
        padding: 0.5rem;
    }
`

export const AddressField = styled.div`
    width: 100%;
    height: 100%;

    & label {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 10px;

        & span {
            font-size: 12px;
        }
    }
`

export const PaymentTypeSelector = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;

    & label {
        display: flex;
        align-items: center;
        gap: 6px;

        &.disable {
            & img {
                filter: grayscale(100%);
            }
        }

        & input[type='radio'] {
            border: 1px solid red;
            border-radius: 50%;

            &:active {
                transform: scale(1.2);
            }

            &:checked {
                background: red;
            }
        }
    }
`

export const Actions = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
        flex: 1;
    }

    @media (max-width: 425px) {
        padding: 0;
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
