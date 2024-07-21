import React from 'react'

import image from '../../assets/banner.png'
import { Container, Texts, Title } from './customBanner.styles'

interface CustomBannerProps {
    title: string
    span: string
}

const CustomBanner: React.FC<CustomBannerProps> = ({ title, span }) => {
    return (
        <Container $background={image}>
            <Texts>
                <Title>{title}</Title>
                <span>{span}</span>
            </Texts>
        </Container>
    )
}

export default CustomBanner
