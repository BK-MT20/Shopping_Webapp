import { Statistic } from 'antd'
import React from 'react'
import {
  Route,
  BrowserRouter,
  Routes,
  Outlet
} from 'react-router-dom'
import Layout from './pages/admin/Layout'
import { OrderDetail, OrdersList } from './pages/admin/orders'
import { Login, Register, ForgotPW } from './pages/auth'
import { ManageProducts } from './pages/admin/products'
import AEProducts from './pages/admin/products/AED-Products/AEProducts'
import { Statisticmonth, Items } from './pages/admin/statistic'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPW/>}/>
        <Route path='/' element={<Layout />}>
          <Route path='orders/' element={<Outlet />}>
            <Route index element={<OrdersList />} />
            <Route path=':orderId' element={<OrderDetail />} />
          </Route>
          <Route path='manage-products' element={<ManageProducts/>} />
          <Route path='manage-products/AEProducts' element={<AEProducts/>} />
          <Route path='manage-products/AEProducts/:Add' element={<AEProducts/>} />
          <Route path='manage-products/AEProducts/:Edit' element={<AEProducts/>} />
          <Route path='manage-statistic' element={<Statisticmonth/>} />
          <Route path='manage-statistic/monthstatistic' element={<Statisticmonth/>} />
        
          <Route path='manage-statistic/itemsstatistic' element={<Items/>} />
          {/* <Route path='manage-statistic/' element={<Items/>} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App