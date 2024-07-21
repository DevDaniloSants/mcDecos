import styled from 'styled-components'
import { motion } from 'framer-motion'
import Colors from '../../colors/theme.colors'

export const Container = styled(motion.div)`
    height: auto;
    border-radius: 8px;
    background-color: ${Colors.span.background};
    padding: 1rem;
    position: relative;

    & button {
        background-color: ${Colors.background};
        position: absolute;
        right: 20px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
    border-radius: 20px;
    padding: 1rem;
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;

    & img {
        width: 50%;
        max-width: 100px;
        max-height: 100px;
        border-radius: 8px;
        object-fit: cover;
    }

    @media (max-width: 425px) {
        & img {
            width: 60%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & p:nth-child(1) {
        font-weight: 300;
        font-size: clamp(10px, 2vw, 14px);
        text-transform: uppercase;
    }
    & p:nth-child(2) {
        font-weight: bold;
        font-size: clamp(22px, 2vw, 32px);
        color: ${Colors.primary};
    }
`
