import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
`

export const HomeContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 320px;
`

export const HomeSection = styled.section`
    display: flex;
    gap: 0.4rem;

    & span:nth-child(1) {
        flex: 1;
    }

    & span:nth-child(2) {
        flex: 1.5;
    }
`

export const HomeLogo = styled.img`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
`

export const Span = styled.span<{
    $primary?: boolean
}>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-family: 'Roboto Condensed', sans-serif;
    font-size: 14px;

    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;

    background-color: ${(props) =>
        props.$primary ? 'none' : `${Colors.span.background}`};
    border: ${(props) =>
        props.$primary ? `1px solid ${Colors.primary}` : 'none'};
    color: ${Colors.text.white};

    & svg {
        background-color: transparent;
        fill: ${(props) => (props.$primary ? `${Colors.primary}` : '')};
    }

    &.position_end {
        position: absolute;
        bottom: 0;
    }
`
