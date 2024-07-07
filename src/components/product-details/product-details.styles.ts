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
    height: 280px;
    padding: 0.5rem;
    border-radius: 8px;
    background: url(${image});
    background-size: cover;
    background-position: center;

    overflow: hidden;

    position: relative;

    & img {
        position: absolute;
        bottom: -15%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 8px 5px rgba(0, 0, 0, 1));
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
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    & .details_start {
        display: flex;
        justify-content: space-between;
    }

    & .details_center {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2rem;
        padding: 2rem 0;
    }

    & .details_end {
        width: 100%;
        align-items: center;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        & .ingredient-item {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${Colors.span.background};
            border-radius: 6px;
            cursor: pointer;

            position: relative;

            &:hover .tooltiptext {
                visibility: visible;
                opacity: 1;
            }

            & img {
                width: 80%;
                height: 80%;
            }

            & .tooltiptext {
                visibility: hidden;
                background-color: ${Colors.primary};
                color: ${Colors.text.dark};
                font-family: 'Roboto';
                font-size: 12px;
                text-align: center;
                border-radius: 8px;
                padding: 5px;
                position: absolute;
                z-index: 1;
                bottom: 120%;
                left: 130%;
                margin-left: -80px;
                opacity: 0;
                transition: opacity 0.3s;
                z-index: 10;

                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: 0px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: ${Colors.primary} transparent transparent
                        transparent;
                }
            }
        }
    }

    @media (max-width: 425px) {
        & .details_end {
            justify-content: center;
        }
    }
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
