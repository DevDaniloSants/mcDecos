import React from 'react'
import { useDispatch } from 'react-redux'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'

import Product from '../../types/product.types'
import { useAppSelector } from '../../hooks/redux.hooks'
import { addFavotires } from '../../store/favorites/favoritesSlice'
import { Button } from './favoriteButton.styles'

interface FavoriteProps {
    product: Product
}

const FavoriteButton: React.FC<FavoriteProps> = ({ product }) => {
    const dispatch = useDispatch()
    const { favorites } = useAppSelector((state) => state.favoritesReducer)

    const productIsAlreadyFavorite = favorites.some(
        (item) => item.id === product?.id
    )

    const handleAddToFavotires = () => {
        dispatch(addFavotires(product!))
    }

    return (
        <Button onClick={handleAddToFavotires}>
            {productIsAlreadyFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </Button>
    )
}

export default FavoriteButton
