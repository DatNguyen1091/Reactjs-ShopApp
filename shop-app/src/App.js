import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layout 
import Home from './components/layout/Home';
import About from './components/layout/About';
import Blog from './components/layout/Blog';
import Contact from './components/layout/Contact';
import Products from './components/layout/Products';
import Testimonial from './components/layout/Testimonial';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
