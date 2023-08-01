import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout 
import Home from './components/layout/Home';
import Contact from './components/layout/Contact';
import Products from './components/layout/Products';
import ProductDetail from './components/layout/ProductDetail';
import Cart from './components/layout/Cart';

// User
import Register from './components/account/Register';
import Login from './components/account/Login';

// Admin
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/productdetail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
