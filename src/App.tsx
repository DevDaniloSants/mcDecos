import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import RootLayout from './pages/RootLayout'
import CategoryPage from './pages/category/category.page'
import ProductPage from './pages/product/product.page'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/category',
                element: <CategoryPage />,
            },
            {
                path: '/category/:id',
                element: <ProductPage />,
            },
        ],
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
