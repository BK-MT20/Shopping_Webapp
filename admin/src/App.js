import {
  Route,
  BrowserRouter,
  Routes,
  Outlet
} from 'react-router-dom'
import Layout from './pages/admin/Layout'
import { OrderDetail, Orders, OrdersHistory } from './pages/admin/orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='orders/' element={<Outlet />}>
            <Route index element={<Orders />} />
            <Route path='history' element={<OrdersHistory />} />
            <Route path='order/:id' element={<OrderDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
