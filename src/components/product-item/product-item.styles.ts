import styled from 'styled-components'
import { motion } from 'framer-motion'
import Colors from '../../colors/theme.colors'

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 8px;
    background-color: ${Colors.span.background};

    cursor: pointer;
`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 8px 8px 0 0;
    padding-top: 1rem;

    & img {
        width: 50%;
        max-width: 160px;
        height: 70%;
        border-radius: 8px;
        object-fit: cover;
    }

    @media (max-width: 647px) {
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
    gap: 0.5rem;
    width: 100%;

    padding: 1rem;

    & p:nth-child(1) {
        font-weight: 300;
        font-size: clamp(10px, 2vw, 14px);
        text-transform: uppercase;
    }
    & p:nth-child(2) {
        font-weight: bold;
        font-size: clamp(16px, 2vw, 20px);
        color: ${Colors.primary};
    }
`
