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

import P1R1I1 from '../pages/itemDetailP1/page1_item1.js'
import P1R1I2 from '../pages/itemDetailP1/page1_item2.js'
import P1R1I3 from '../pages/itemDetailP1/page1_item3.js'
import P1R1I4 from '../pages/itemDetailP1/page1_item4.js'
import P1R1I5 from '../pages/itemDetailP1/page1_item5.js'
import P1R1I6 from '../pages/itemDetailP1/page1_item6.js'
import P1R1I7 from '../pages/itemDetailP1/page1_item7.js'
import P1R1I8 from '../pages/itemDetailP1/page1_item8.js'
import P1R1I9 from '../pages/itemDetailP1/page1_item9.js'
import P1R1I10 from '../pages/itemDetailP1/page1_item10.js'
import P1R1I11 from '../pages/itemDetailP1/page1_item11.js'
import P1R1I12 from '../pages/itemDetailP1/page1_item12.js'

import P2R1I1 from '../pages/itemDetailP2/page2_item1.js'
import P2R1I2 from '../pages/itemDetailP2/page2_item2.js'
import P2R1I3 from '../pages/itemDetailP2/page2_item3.js'
import P2R1I4 from '../pages/itemDetailP2/page2_item4.js'
import P2R1I5 from '../pages/itemDetailP2/page2_item5.js'
import P2R1I6 from '../pages/itemDetailP2/page2_item6.js'
import P2R1I7 from '../pages/itemDetailP2/page2_item7.js'
import P2R1I8 from '../pages/itemDetailP2/page2_item8.js'
import P2R1I9 from '../pages/itemDetailP2/page2_item9.js'
import P2R1I10 from '../pages/itemDetailP2/page2_item10.js'
import P2R1I11 from '../pages/itemDetailP2/page2_item11.js'
import P2R1I12 from '../pages/itemDetailP2/page2_item12.js'

import P3R1I1 from '../pages/itemDetailP3/page3_item1.js'
import P3R1I2 from '../pages/itemDetailP3/page3_item2.js'
import P3R1I3 from '../pages/itemDetailP3/page3_item3.js'
import P3R1I4 from '../pages/itemDetailP3/page3_item4.js'
import P3R1I5 from '../pages/itemDetailP3/page3_item5.js'
import P3R1I6 from '../pages/itemDetailP3/page3_item6.js'
import P3R1I7 from '../pages/itemDetailP3/page3_item7.js'
import P3R1I8 from '../pages/itemDetailP3/page3_item8.js'
import P3R1I9 from '../pages/itemDetailP3/page3_item9.js'
import P3R1I10 from '../pages/itemDetailP3/page3_item10.js'
import P3R1I11 from '../pages/itemDetailP3/page3_item11.js'
import P3R1I12 from '../pages/itemDetailP3/page3_item12.js'

import P4R1I1 from '../pages/itemDetailP4/page4_item1.js'


const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/signin", component: SignIn, layout: Login },
    { path: "/signup", component: SignUp, layout: Login },
    { path: "/checkout", component: CheckOut, layout: DefaultLayout },
    { path: "/product1", component: Product1, layout: DefaultLayout },
    { path: "/product2", component: Product2, layout: DefaultLayout },
    { path: "/product3", component: Product3, layout: DefaultLayout },
    { path: "/product4", component: Product4, layout: DefaultLayout },

    { path: "/product1/Boxy-Denim-Jacket", component: P1R1I1, layout: DefaultLayout },
    { path: "/product1/Cotton-Flannel-Shirt", component: P1R1I2, layout: DefaultLayout },
    { path: "/product1/Cotton-Shirt", component: P1R1I3, layout: DefaultLayout },
    { path: "/product1/Drawstring-T-shirt-Dress", component: P1R1I4, layout: DefaultLayout },
    { path: "/product1/Band-Straw-Hat", component: P1R1I5, layout: DefaultLayout },
    { path: "/product1/Cashmere-vest-top", component: P1R1I6, layout: DefaultLayout },
    { path: "/product1/Brown-Leather-Belt", component: P1R1I7, layout: DefaultLayout },
    { path: "/product1/Cotton-bucket-hat", component: P1R1I8, layout: DefaultLayout },
    { path: "/product1/High-Ankle-Jeans", component: P1R1I9, layout: DefaultLayout },
    { path: "/product1/Jacket-Denim-Blouse", component: P1R1I10, layout: DefaultLayout },
    { path: "/product1/Jacket-De-Blouse", component: P1R1I11, layout: DefaultLayout },
    { path: "/product1/Oversized-Jacket", component: P1R1I12, layout: DefaultLayout },

    { path: "/product2/Oversized-Jacket", component: P2R1I1, layout: DefaultLayout },
    { path: "/product2/Denim-Jacket", component: P2R1I2, layout: DefaultLayout },
    { path: "/product2/Espadrilles-Sandals", component: P2R1I3, layout: DefaultLayout },
    { path: "/product2/Oversized-T-shirt", component: P2R1I4, layout: DefaultLayout },
    { path: "/product2/Straw-hat", component: P2R1I5, layout: DefaultLayout },
    { path: "/product2/Brown-Leather-Belt", component: P2R1I6, layout: DefaultLayout },
    { path: "/product2/Linen-blend-Shirt", component: P2R1I7, layout: DefaultLayout },
    { path: "/product2/Cotton-bucket-hat", component: P2R1I8, layout: DefaultLayout },
    { path: "/product2/Stripe-Cotton-Shirt", component: P2R1I9, layout: DefaultLayout },
    { path: "/product2/Check-Bag", component: P2R1I10, layout: DefaultLayout },
    { path: "/product2/Linen-Check-Blazer", component: P2R1I11, layout: DefaultLayout },
    { path: "/product2/Long-sleeve-Maxi-Dress", component: P2R1I12, layout: DefaultLayout },

    { path: "/product3/Wool-blend-jacket", component: P3R1I1, layout: DefaultLayout },
    { path: "/product3/Ribbed-cardigan", component: P3R1I2, layout: DefaultLayout },
    { path: "/product3/Jacket-De-Blouse", component: P3R1I3, layout: DefaultLayout },
    { path: "/product3/Oversized-Jacket", component: P3R1I4, layout: DefaultLayout },
    { path: "/product3/Platform-espadrille-sandals", component: P3R1I5, layout: DefaultLayout },
    { path: "/product3/Platform-sandals", component: P3R1I6, layout: DefaultLayout },
    { path: "/product3/Espadrille-sandals", component: P3R1I7, layout: DefaultLayout },
    { path: "/product3/Braided-Sandals", component: P3R1I8, layout: DefaultLayout },
    { path: "/product3/Black-backpack", component: P3R1I9, layout: DefaultLayout },
    { path: "/product3/Gray-backpack", component: P3R1I10, layout: DefaultLayout },
    { path: "/product3/Mens-Gym-Bag", component: P3R1I11, layout: DefaultLayout },
    { path: "/product3/Roller-Messenger-Bag", component: P3R1I12, layout: DefaultLayout },

    { path: "/product4/Straw-Shopeer-Bag", component: P4R1I1, layout: DefaultLayout },
]

export { publicRoutes }