import styled from 'styled-components'

import Colors from '../../colors/theme.colors'

import image from '../../assets/background.png'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 0.3rem;
`

export const Content = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const HeaderSection = styled.div`
    flex: 0 1 220px;
    padding: 0.5rem;
    border-radius: 8px;
    background: url(${image});
    background-size: cover;
    background-position: bottom;

    overflow: hidden;

    position: relative;

    & img {
        width: 160px;
        position: absolute;
        bottom: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 8px 5px rgba(0, 0, 0, 1));
    }

    @media (max-width: 400px) {
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & button {
        display: flex;
        padding: 1rem;
        padding: 0.5rem;
        border: none;
        background-color: ${Colors.span.background};
        border-radius: 6px;

        & svg {
            width: 18px;
            height: 18px;
        }
    }
`

export const DetailsSection = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
`

export const IngredientsText = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
    padding: 20px 0;
`

export const ActionSection = styled.div`
    flex: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    & p:nth-child(2) {
        color: ${Colors.primary};
        font-size: 20px;
    }
`
