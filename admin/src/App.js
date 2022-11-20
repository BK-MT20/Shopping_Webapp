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
import { Statisticmonth, Statisticitems } from './pages/admin/statistic'
import RequiredAuth from './pages/auth/RequiredAuth'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPW/>}/>
        <Route path='/' element={<RequiredAuth />}>
          <Route element={<Outlet />}>
            <Route index element={<Statisticmonth/>} />
            <Route path='/monthstatistic' element={<Statisticmonth/>} />
            <Route path='/itemsstatistic' element={<Statisticitems/>} />
          </Route>
          <Route path='orders/' element={<Outlet />}>
            <Route index element={<OrdersList />} />
            <Route path=':orderId' element={<OrderDetail />} />
          </Route>
          <Route path='manage-products/' element={<Outlet/>} >
            <Route index element={<ManageProducts/>} />
            <Route path='Add' element={<AEProducts/>} />
            <Route path='Edit/:id' element={<AEProducts/>} />
          </Route>
          
          {/* <Route path='manage-statistic' element={<Statisticmonth/>} /> */}
          {/* <Route path='manage-statistic/monthstatistic' element={<Statisticmonth/>} />
        
          <Route path='manage-statistic/itemsstatistic' element={<Statisticitems/>} /> */}
       
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App