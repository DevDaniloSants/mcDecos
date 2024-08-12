import CustomBanner from '../../components/customBanner/customBanner.components'
import Favorites from '../../components/favorites/favorites.components'

import { Container, Content } from './favorites.styles'

const FavoritesPage = () => {
    return (
        <Container>
            <Content>
                <CustomBanner
                    title="Favoritos"
                    span="Encontre os seus lanches favoritos aqui!"
                />
                <Favorites />
            </Content>
        </Container>
    )
}

export default FavoritesPage
