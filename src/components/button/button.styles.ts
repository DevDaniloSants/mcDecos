import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: ${Colors.button.background};
    background: ${Colors.button.backgroundColor};
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto Condensed';
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
