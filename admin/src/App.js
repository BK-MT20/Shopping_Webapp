import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import { Layout, Orders,ManageProducts} from './pages/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='orders' element={<Orders />} />
          <Route path='manage-products' element={<ManageProducts/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
