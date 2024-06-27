import { Outlet } from 'react-router-dom'
import Header from '../components/header/header.components'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout
