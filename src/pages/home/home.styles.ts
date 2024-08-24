import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export interface HomeProps {
    $isOpen: boolean
    $primary?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
`

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 320px;
`

export const Section = styled.section`
    display: flex;
    gap: 0.4rem;

    & span:nth-child(1) {
        flex: 1;
    }

    & span:nth-child(2) {
        flex: 1.5;
    }
`

export const Logo = styled.img<HomeProps>`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;

    filter: ${(props) => (props.$isOpen ? 'none' : 'grayscale(100%)')};
`

export const Span = styled.span<HomeProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-size: 14px;
    text-transform: uppercase;

    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;

    background-color: ${(props) =>
        props.$primary ? 'none' : `${Colors.span.background}`};
    border: ${(props) =>
        props.$primary
            ? `1px solid ${props.$isOpen ? Colors.primary : 'rgba(253, 176, 0, 0.6)'}`
            : 'none'};
    color: ${Colors.text.white};

    & svg {
        background-color: transparent;
        fill: ${(props) =>
            props.$primary ? `${props.$isOpen ? Colors.primary : '#fff'}` : ''};
        width: 18px;
        height: 18px;
    }

    &.position_end {
        position: absolute;
        bottom: 0;
    }
`
