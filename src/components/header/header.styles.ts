import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
`

export const HeaderTitle = styled.h1`
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto Condensed';
`

export const HeaderEnd = styled.div`
    display: flex;
    gap: 1rem;

    & svg {
        width: 18px;
        height: 18px;
    }
`
