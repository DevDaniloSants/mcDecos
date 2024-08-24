import { useNavigate } from 'react-router-dom'
import { PiClockCountdownBold } from 'react-icons/pi'
import { MdOutlineLunchDining } from 'react-icons/md'
import { GoHome } from 'react-icons/go'

import LogoMcDecos from '../../assets/logo_complet.svg'

import { Container, Content, Logo, Section, Span } from './home.styles'

import { CustomButton } from '../../components/button/button.styles'

import isRestaurantOpenHelper from '../../helpers/isRestaurantOpenHelper'

const HomePage = () => {
    const navigate = useNavigate()

    const isOpen = isRestaurantOpenHelper()

    const handleCategoryPage = (): void => {
        navigate('/category')
    }

    return (
        <Container>
            <Content>
                <Logo src={LogoMcDecos} alt="Mc Decos Logo" $isOpen={isOpen} />

                <Section>
                    <Span $isOpen={isOpen}>
                        <PiClockCountdownBold />
                        20 - 30 min
                    </Span>
                    <Span $isOpen={isOpen} $primary>
                        <MdOutlineLunchDining />
                        {isOpen ? 'Loja Aberta' : 'Loja Fechada'}
                    </Span>
                </Section>

                <CustomButton
                    onClick={() => handleCategoryPage()}
                    $isOpen={isOpen}
                >
                    FAÇA O SEU PEDIDO
                </CustomButton>
                <Span className="position_end" $isOpen={isOpen}>
                    <GoHome />
                    Rua Lorem Ipsum - Ipsum Lorem 28 º
                </Span>
            </Content>
        </Container>
    )
}

export default HomePage
