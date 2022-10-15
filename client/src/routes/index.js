import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CheckOut from '../pages/CheckOut'
import Product1 from '../pages/Product'

import DefaultLayout from '../layouts/DefaultLayout'
import Login from '../layouts/Login'

import Page_item from '../pages/Page_Item'

const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/signin", component: SignIn, layout: Login },
    { path: "/signup", component: SignUp, layout: Login },
    { path: "/checkout", component: CheckOut, layout: DefaultLayout },
    { path: "/product", component: Product1, layout: DefaultLayout },
    { path: "/product/:id", component: Page_item, layout: DefaultLayout },
]

export { publicRoutes }