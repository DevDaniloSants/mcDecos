import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const Button = styled.button`
    display: flex;
    padding: 1rem;
    padding: 0.5rem;
    border: none;
    background-color: ${Colors.span.background};
    border-radius: 6px;
    cursor: pointer;

    & svg {
        width: 18px;
        height: 18px;
    }
`
