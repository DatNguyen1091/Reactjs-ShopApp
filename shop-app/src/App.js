import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layout 
import Home from './components/layout/Home';
import Contact from './components/layout/Contact';
import Products from './components/layout/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
