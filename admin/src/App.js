import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import { Layout, Orders,ManageProducts} from './pages/admin';
import AEProducts from './pages/admin/AED-Products/AEProducts'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='orders' element={<Orders />} />
          <Route path='manage-products' element={<ManageProducts/>} />
          <Route path='manage-products/AEProducts' element={<AEProducts/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
