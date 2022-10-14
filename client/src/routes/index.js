import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CheckOut from '../pages/CheckOut'
import Product1 from '../pages/Product1'
import Product2 from '../pages/Product2'
import Product3 from '../pages/Product3'
import Product4 from '../pages/Product4'

import DefaultLayout from '../layouts/DefaultLayout'
import Login from '../layouts/Login'

import Page_item from '../pages/Page_Item'

const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/signin", component: SignIn, layout: Login },
    { path: "/signup", component: SignUp, layout: Login },
    { path: "/checkout", component: CheckOut, layout: DefaultLayout },
    { path: "/product1", component: Product1, layout: DefaultLayout },
    { path: "/product2", component: Product2, layout: DefaultLayout },
    { path: "/product3", component: Product3, layout: DefaultLayout },
    { path: "/product4", component: Product4, layout: DefaultLayout },

    { path: "/product/:id", component: Page_item, layout: DefaultLayout },

]

export { publicRoutes }