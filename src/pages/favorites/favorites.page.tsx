import CustomBanner from '../../components/customBanner/customBanner.component'
import Favorites from '../../components/favotires/favorites.component'

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
