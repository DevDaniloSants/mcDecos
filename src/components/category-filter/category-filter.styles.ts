import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Products = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;

    grid-gap: 14px;
    padding-bottom: 14px;

    @media (max-width: 627px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 4px;
        padding-bottom: 4px;
    }

    @media (max-width: 425px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
        padding-bottom: 4px;
    }
`
