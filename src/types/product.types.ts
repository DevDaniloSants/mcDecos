import Ingredient from './ingredient.types'

interface Product {
    id: string
    displayName: string
    price: number
    imageUrl: string
    ingredients?: Ingredient[]
}

export default Product
