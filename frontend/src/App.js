import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Cart from './pages/cart';
import LoginSignup from './pages/loginSignup';
import Product from './pages/product';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<LoginSignup />}>
                <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<loginSignup />} />
          <Route path="/cart" element={<Cart  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
