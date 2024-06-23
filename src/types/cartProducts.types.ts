import Product from './product.types'

interface CartProducts extends Product {
    quantity: number
}

export default CartProducts
