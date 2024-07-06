import styled from 'styled-components'

import Colors from '../../colors/theme.colors'

export const Container = styled.div`
    width: 100%;

    padding-bottom: 2rem;
`

export const Navigation = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;

    position: relative;

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`

export const Title = styled.h6`
    font-size: 14px;
    font-weight: 300;
    padding: 1rem;
`

export const Button = styled.button`
    max-width: 130px;
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid ${Colors.span};

    gap: 6px;

    border: none;

    font-size: clamp(10px, 2vw, 12px);

    border-radius: 8px;

    position: relative;

    transition: filter ease 0.5s;

    z-index: 2;

    cursor: pointer;

    transition: color ease 0.5s;

    &.active {
        background-color: ${Colors.span.background};
        border: 1px solid gray;
    }

    @media (max-width: 452px) {
        flex-direction: column;
        height: 70px;
    }
`

export const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
    padding: 0.4rem;
`
