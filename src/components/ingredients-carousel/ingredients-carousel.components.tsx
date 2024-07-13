import React, { useEffect, useRef, useState } from 'react'
import Product from '../../types/product.types'
import {
    IgredientsInnerCarousel,
    IngredientsImage,
    IngredientsCarouselContainer,
} from './ingredients-carousel.styles'

interface ProductProps {
    product: Product
}

const IngredientsCarousel: React.FC<ProductProps> = ({ product }) => {
    const [width, setWidth] = useState<number>(0)

    const carousel = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setWidth(
                    carousel.current.scrollWidth - carousel.current.offsetWidth
                )
            }
        }

        window.addEventListener('resize', updateWidth)

        updateWidth()

        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, [])

    return (
        <IngredientsCarouselContainer ref={carousel}>
            <IgredientsInnerCarousel
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
            >
                {product?.ingredients?.map((ingredient) => (
                    <IngredientsImage key={ingredient.id}>
                        <img src={ingredient.imageUrl} />
                        <div className="tooltiptext">
                            {ingredient.displayName}
                        </div>
                    </IngredientsImage>
                ))}
            </IgredientsInnerCarousel>
        </IngredientsCarouselContainer>
    )
}

export default IngredientsCarousel
