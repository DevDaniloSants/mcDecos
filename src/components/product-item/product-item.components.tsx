import Product from '../../types/product.types'
import { Container, Image, Info } from './product-item.styles'

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
    return (
        <Container variants={framerMotionVariants}>
            <Image>
                <img src={product.imageUrl} alt="" />
            </Image>
            <Info>
                <p>{product.displayName}</p>
                <p>R${product.price}</p>
            </Info>
        </Container>
    )
}

export default ProductItem
