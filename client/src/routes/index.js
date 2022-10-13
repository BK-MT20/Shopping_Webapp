import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CheckOut from '../pages/CheckOut'

import DefaultLayout from '../layouts/DefaultLayout'
import Login from '../layouts/Login'

const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/signin", component: SignIn, layout: Login },
    { path: "/signup", component: SignUp, layout: Login },
    { path: "/checkout", component: CheckOut, layout: DefaultLayout },
]

export { publicRoutes }