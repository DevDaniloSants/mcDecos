import { PiClockCountdownBold } from 'react-icons/pi'
import { MdOutlineLunchDining } from 'react-icons/md'
import { GoHome } from 'react-icons/go'

import {
    HomeContainer,
    HomeContent,
    HomeLogo,
    HomeSection,
    Span,
} from './home.styles'

import LogoMcDecos from '../../assets/logo_complet.svg'
import { CustomButton } from '../../components/button/button.styles'

const HomePage = () => {
    return (
        <HomeContainer>
            <HomeContent>
                <HomeLogo src={LogoMcDecos} alt="Mc Decos Logo" />

                <HomeSection>
                    <Span>
                        <PiClockCountdownBold />
                        20 - 30 min
                    </Span>
                    <Span $primary>
                        <MdOutlineLunchDining />
                        LOJA ABERTA
                    </Span>
                </HomeSection>

                <CustomButton>FAÇA O SEU PEDIDO</CustomButton>
                <Span className="position_end">
                    <GoHome />
                    Rua Lorem Ipsum - Ipsum Lorem 28 º
                </Span>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomePage
