import { useAppSelector } from '../../hooks/redux.hooks'
import ProductItem from '../product-item/product-item.components'
import { Container } from './favorites.styles'

const Favorites = () => {
    const { favorites } = useAppSelector((state) => state.favoritesReducer)

    return (
        <Container>
            {favorites.map((product) => (
                <ProductItem key={product.displayName} product={product} />
            ))}
        </Container>
    )
}

export default Favorites
