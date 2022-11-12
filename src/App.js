import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
