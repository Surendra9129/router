import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Product from './component/Product';
import { Route,Routes } from 'react-router-dom';
import Nav from './component/Nav';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
         <Route path='/' element={ <Home/>}></Route>
         <Route path='/product' element={ <Product/>}></Route>
         <Route path='/product:id' element={ <Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
