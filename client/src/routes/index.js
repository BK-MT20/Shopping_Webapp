import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import CheckOut from '../pages/CheckOut'

import LayoutDefault from '../layouts/DefaultLayout'

const publicRoutes = [
    { path: "/", component: Home, layout: LayoutDefault },
    { path: "/signup", component: SignUp, layout: LayoutDefault },
    { path: "/checkout", component: CheckOut, layout: LayoutDefault },
]

export { publicRoutes }