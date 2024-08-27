import { Outlet } from 'react-router-dom'
import Header from '../components/header/header.components'
import Cart from '../components/cart/cart.components'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />

            <Cart />
        </>
    )
}

export default RootLayout
