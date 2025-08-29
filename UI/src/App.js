import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar'; 
import Home from './component/Home.jsx';
import AddProduct from './component/AddProduct.jsx';
import EditProduct from './component/EditProduct.jsx';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
<Route path='/editProduct' element={<EditProduct/>}></Route>
    </Routes>
    </>
  );
}

export default App;
