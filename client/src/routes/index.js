import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CheckOut from '../pages/CheckOut'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'

import DefaultLayout from '../layouts/DefaultLayout'
import Login from '../layouts/Login'

const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/signin", component: SignIn, layout: Login },
    { path: "/signup", component: SignUp, layout: Login },
    { path: "/checkout", component: CheckOut, layout: DefaultLayout },
    { path: "/products", component: Products, layout: DefaultLayout },
    { path: "/product/:id", component: ProductDetail, layout: DefaultLayout },
]

export { publicRoutes }