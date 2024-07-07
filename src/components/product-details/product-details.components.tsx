import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { IoIosArrowBack, IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import Product from '../../types/product.types'

import Loading from '../loading/loading.components'
import Button from '../button/button.components'

import {
    ActionSection,
    Buttons,
    Container,
    Content,
    DetailsSection,
    HeaderSection,
} from './product-details.styles'

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState<Product | null>(null)

    const { id } = useParams()

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
                        <button>
                            <IoIosArrowBack />
                        </button>
                        <button>
                            <IoMdHeartEmpty />
                        </button>
                    </Buttons>
                    <img src={product?.imageUrl} alt={product?.displayName} />
                </HeaderSection>
                <DetailsSection>
                    <div className="details_start">
                        <h1>{product?.displayName}</h1>
                    </div>
                    <div className="details_center">
                        {product?.ingredients?.map((ingredient) => (
                            <p>{ingredient.displayName},</p>
                        ))}
                    </div>
                    <div className="details_end">
                        {product?.ingredients?.map((ingredient) => (
                            <div className="ingredient-item">
                                <img
                                    src={ingredient.imageUrl}
                                    alt={ingredient.displayName}
                                />
                                <div className="tooltiptext">
                                    {ingredient.displayName}
                                </div>
                            </div>
                        ))}
                    </div>
                </DetailsSection>
                <ActionSection>
                    <div>
                        <p>preço</p>
                        <p>R${product?.price}</p>
                    </div>
                    <Button startIcon={<MdOutlineAddShoppingCart />}>
                        adicionar ao carrinho
                    </Button>
                </ActionSection>
            </Content>
        </Container>
    )
}

export default ProductDetails
