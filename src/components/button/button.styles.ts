import styled from 'styled-components'
import Colors from '../../colors/theme.colors'
import { HomeProps } from '../../pages/home/home.styles'

export const CustomButton = styled.button<HomeProps>`
    max-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: ${(props) =>
        props.$isOpen
            ? `${Colors.button.background}`
            : 'rgba(253, 176, 0, 0.6)'};
    background: ${(props) =>
        props.$isOpen
            ? `${Colors.button.backgroundColor}`
            : 'rgba(253, 176, 0, 0.6)'};
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 400;
    font-size: 0.9em;
    color: ${Colors.text.dark};

    cursor: pointer;

    & svg {
        width: 18px;
        height: 18px;
        fill: ${Colors.text.dark};
    }
`

export const IconButton = styled.div``
