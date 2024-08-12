import CustomBanner from '../../components/customBanner/customBanner.components'
import Favorites from '../../components/favorites/favorites.components'

import { Container, Content } from './favorites.styles'

const FavoritesPage = () => {
    return (
        <Container>
            <Content>
                <CustomBanner
                    title="Favoritos"
                    span="área destinada a favoritos"
                />
                <Favorites />
            </Content>
        </Container>
    )
}

export default FavoritesPage
