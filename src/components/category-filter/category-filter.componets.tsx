import { useAppSelector } from '../../hooks/redux.hooks'
import ProductItem from '../product-item/product-item.components'

import { Products } from './category-filter.styles'

const framerMotionVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
}

const CategoryFilter = () => {
    const { categories, filtered } = useAppSelector(
        (state) => state.categoryReducer
    )

    const filteredCategory =
        filtered.length > 0
            ? categories.filter((category) => category.name.includes(filtered))
            : categories

    return (
        <>
            {filteredCategory.map((category) => (
                <Products
                    variants={framerMotionVariants}
                    initial="hidden"
                    animate="visible"
                    layout
                    key={category.id}
                >
                    {category.products?.map((product) => (
                        <ProductItem
                            key={product.displayName}
                            product={product}
                        />
                    ))}
                </Products>
            ))}
        </>
    )
}

export default CategoryFilter
