import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import RootLayout from './pages/RootLayout'
import ExplorePage from './pages/explore/explore.page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/explore',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <ExplorePage />,
            },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
