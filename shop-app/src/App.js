import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout 
import Home from './components/layout/Home';
import Contact from './components/layout/Contact';
import Products from './components/layout/Products';
import ProductDetail from './components/layout/ProductDetail';
import Cart from './components/layout/Cart';

// Account
import Register from './components/account/Register';
import Login from './components/account/Login';

// Admin
import Dashboard from './components/admin/Dashboard';
import AdCart from './components/admin/AdCart';
import AdCategory from './components/admin/AdCategory';
import AdCustomer from './components/admin/AdCustomer';
import AdFeedback from './components/admin/AdFeedback';
import AdOrder from './components/admin/AdOrder';
import AdProduct from './components/admin/AdProduct';
import AdUser from './components/admin/AdUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/productdetail/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={<Cart />}/>

          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>

          <Route path='/admin/dashboard' element={<Dashboard />}/>
          <Route path='/admin' element={<Dashboard />}/>
          <Route path='/admin/carts' element={<AdCart />}/>
          <Route path='/admin/categories' element={<AdCategory />}/>
          <Route path='/admin/customers' element={<AdCustomer />}/>
          <Route path='/admin/feedbacks' element={<AdFeedback />}/>
          <Route path='/admin/orders' element={<AdOrder />}/>
          <Route path='/admin/products' element={<AdProduct />}/>
          <Route path='/admin/accounts' element={<AdUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
