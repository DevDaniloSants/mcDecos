import { useNavigate } from 'react-router-dom'

import Product from '../../types/product.types'
import { Container, Content, Image, Info } from './product-item.styles'
import FavoriteButton from '../favoriteButton/favoriteButton.components'

interface ProductItemProps {
    product: Product
}

const framerMotionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const navigate = useNavigate()

    const handleProductId = (productId: string) => {
        navigate(`/category/${productId}`)
    }

    return (
        <Container variants={framerMotionVariants}>
            <FavoriteButton product={product} />
            <Content onClick={() => handleProductId(product.id)}>
                <Image>
                    <img src={product.imageUrl} alt={product.displayName} />
                </Image>
                <Info>
                    <p>{product.displayName}</p>
                    <p>R${product.price}</p>
                </Info>
            </Content>
        </Container>
    )
}

export default ProductItem
