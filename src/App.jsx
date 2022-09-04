import './App.css';

import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/NavBar/NavBar';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path ='/' element={<ItemListContainer />} />
       <Route path = '/categoria/:categoriaId' element={ <ItemListConteiner />} />
       <Route path = '/cart' element ={ <Cart />} />
       <Route path = '/detalle/:detalleid' element = {<ItemDetailContainer /> } />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
