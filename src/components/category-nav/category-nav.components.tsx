import { useState } from 'react'

import {
    Button,
    Container,
    Image,
    Navigation,
    Title,
} from './category-nav.styles'

import { useAppSelector } from '../../hooks/redux.hooks'
import { useDispatch } from 'react-redux'
import { setFiltered } from '../../store/category/CategorySlice'

const CategoryNavigation = () => {
    const [activeCategory, setActiveCategory] = useState('')

    const dispatch = useDispatch()

    const { categories, filtered } = useAppSelector(
        (state) => state.categoryReducer
    )

    const handleNavigation = (category: string) => {
        if (filtered !== category) {
            dispatch(setFiltered(category))
            setActiveCategory(category)
        }
        if (filtered === category) {
            dispatch(setFiltered(category))
            setActiveCategory(category)
        }
    }

    const allButtons = [
        {
            id: '0',
            name: '',
            displayName: 'All',
            imageUrl: 'src/assets/all.png',
        },
        ...categories,
    ]

    return (
        <Container>
            <Title>Selecione uma Categoria</Title>
            <Navigation>
                {allButtons.map((category) => (
                    <Button
                        className={`${activeCategory === category.name ? 'active' : ''}`}
                        onClick={() => handleNavigation(category.name)}
                        key={category.id}
                    >
                        <Image src={category?.imageUrl} alt={category.name} />
                        {category?.displayName}
                    </Button>
                ))}
            </Navigation>
        </Container>
    )
}

export default CategoryNavigation
