import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes,
  Outlet
} from 'react-router-dom'
import Layout from './pages/admin/Layout'
import { OrderDetail, OrdersList } from './pages/admin/orders'

import { ManageProducts } from './pages/admin/products'
import AEProducts from './pages/admin/products/AED-Products/AEProducts'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='orders/' element={<Outlet />}>
            <Route index element={<OrdersList />} />
            <Route path=':orderId' element={<OrderDetail />} />
          </Route>
          {/* <Route path='orders' element={<Orders />} /> */}
          <Route path='manage-products' element={<ManageProducts/>} />
          <Route path='manage-products/AEProducts' element={<AEProducts/>} />
          <Route path='manage-products/AEProducts/:Add' element={<AEProducts/>} />
          <Route path='manage-products/AEProducts/:Edit/:id' element={<AEProducts/>} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App