import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import { addProduct, toggleCart } from '../../store/cart/CartSlice'
import Product from '../../types/product.types'

import Loading from '../loading/loading.components'
import Button from '../button/button.components'
import IngredientsCarousel from '../ingredients-carousel/ingredients-carousel.components'

import {
    ActionSection,
    Buttons,
    Container,
    Content,
    DetailsSection,
    HeaderSection,
    IngredientsText,
} from './product-details.styles'
import FavoriteButton from '../favoriteButton/favoriteButton.components'
import isRestaurantOpenHelper from '../../helpers/isRestaurantOpenHelper'

const ProductDetails = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<Product | null>(null)

    const isOpen = isRestaurantOpenHelper()

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const { id } = useParams<string>()

    const handleIconClick = () => {
        navigate('/category')
    }

    const handleAddToCart = () => {
        dispatch(addProduct(product!))
        dispatch(toggleCart())
    }

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                setLoading(true)
                const querySnapshot = await getDocs(
                    collection(db, 'categories').withConverter(
                        categoryConverter
                    )
                )

                querySnapshot.forEach((doc) => {
                    const productFromFirestore = doc
                        .data()
                        .products?.find((product) => product.id === id)

                    if (productFromFirestore) {
                        setProduct(productFromFirestore!)
                    }
                })
            } catch (error) {
                console.error('Error fetching document: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchDocument()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <Container>
            <Content>
                <HeaderSection>
                    <Buttons>
                        <button onClick={handleIconClick}>
                            <IoIosArrowBack />
                        </button>
                        <FavoriteButton product={product!} />
                    </Buttons>
                    <img src={product?.imageUrl} alt={product?.displayName} />
                </HeaderSection>
                <DetailsSection>
                    <h1>{product?.displayName}</h1>

                    <IngredientsText>
                        {product?.ingredients
                            ?.map((ingredient) => ingredient.displayName)
                            .join(', ')}
                        {product?.ingredients && <span>.</span>}
                    </IngredientsText>
                    <IngredientsCarousel product={product!} />
                </DetailsSection>
                <ActionSection>
                    <div>
                        <p>Preço</p>
                        <p>R${product?.price}</p>
                    </div>
                    <Button
                        isOpen={isOpen}
                        startIcon={<MdOutlineAddShoppingCart />}
                        onClick={handleAddToCart}
                    >
                        Adicionar ao carrinho
                    </Button>
                </ActionSection>
            </Content>
        </Container>
    )
}

export default ProductDetails
