import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes,
  Outlet
} from 'react-router-dom'
import Layout from './pages/admin/Layout'
import {/*OrderDetail*/  Orders,OrdersHistory } from './pages/admin/orders'
// import { OrdersHistory } from './pages/admin/orders/OrdersHistory'
// import {
//   Route,
//   BrowserRouter,
//   Routes
// } from 'react-router-dom'
// import { Layout, Orders } from './pages/admin';


import { ManageProducts } from './pages/admin/products'
import AEProducts from './pages/admin/products/AED-Products/AEProducts'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='orders/' element={<Outlet />}>
            <Route index element={<Orders />} />
            <Route path='history' element={<OrdersHistory />} />
            {/* <Route path='order/:id' element={<OrderDetail />} /> */}
          </Route>
          <Route path='orders' element={<Orders />} />
          <Route path='manage-products' element={<ManageProducts/>} />
          <Route path='manage-products/AEProducts' element={<AEProducts/>} />
          <Route path='manage-products/AEProducts/:Add' element={<AEProducts/>} />
          <Route path='manage-products/AEProducts/:Edit' element={<AEProducts/>} />


        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App