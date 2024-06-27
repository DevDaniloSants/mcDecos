import Product from '../../types/product.types'
import {
    CategoryItemContainer,
    CategoryItemImage,
    CategoryItemInfo,
} from './category-item.styles'

interface CategoryItemProps {
    product: Product
}

const framerMotionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

const CategoryItem: React.FC<CategoryItemProps> = ({ product }) => {
    return (
        <CategoryItemContainer variants={framerMotionVariants}>
            <CategoryItemImage>
                <img src={product.imageUrl} alt="" />
            </CategoryItemImage>
            <CategoryItemInfo>
                <p>{product.displayName}</p>
                <p>R${product.price}</p>
            </CategoryItemInfo>
        </CategoryItemContainer>
    )
}

export default CategoryItem
