import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const CustomButton = styled.button`
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
`

export const IconButton = styled.div``
