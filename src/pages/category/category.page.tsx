import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { useAppSelector } from '../../hooks/redux.hooks'
import { fetchCategories } from '../../store/category/CategorySlice'

import { Container, Content } from './category.styles'
import CategoryNavigation from '../../components/category-nav/category-nav.components'
import CategoryFilter from '../../components/category-filter/category-filter.componets'
import Loading from '../../components/loading/loading.components'

const CategoryPage = () => {
    const dispatch = useDispatch()

    const { isLoading } = useAppSelector((state) => state.categoryReducer)

    useEffect(() => {
        dispatch(fetchCategories())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Container>
            <Content>
                <CategoryNavigation />
                <CategoryFilter />
            </Content>
        </Container>
    )
}

export default CategoryPage
