import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';

// Admin Imports
import ProductsList from './components/admin/ProductsList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/admin/productsList' element={<ProductsList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
