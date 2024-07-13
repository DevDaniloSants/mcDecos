import { motion } from 'framer-motion'
import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const IngredientsCarouselContainer = styled(motion.div)`
    cursor: grab;
    overflow: hidden;
    height: 100%;
`

export const IgredientsInnerCarousel = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

    & *:first-child {
        & .tooltiptext {
            margin-left: -70px;
        }
    }

    & *:last-child {
        & .tooltiptext {
            margin-left: -100px;
        }
    }
`

export const IngredientsImage = styled(motion.div)`
    flex: 0 0 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.span.background};
    border-radius: 6px;
    padding: 10px;
    position: relative;

    & img {
        width: 100%;
        max-width: 36px;
        pointer-events: none;
    }

    &:hover {
        background-color: ${Colors.background};
        border: 1px solid ${Colors.span.background};
    }

    &:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    & .tooltiptext {
        visibility: hidden;
        position: absolute;
        width: 100px;
        background-color: ${Colors.span.background};
        text-align: center;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        position: absolute;
        z-index: 1;
        top: 110%;
        left: 100%;
        margin-left: -80px;
        opacity: 0;
        transition: opacity 0.6;
    }
`
