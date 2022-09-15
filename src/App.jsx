import './App.css';
import React from 'react';

import {  BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/NavBar/NavBar';
import CartProvider from './context/CartContext';


function App() { 
  return (
    <>
    <BrowserRouter>
     <CartProvider>
     <NavBar />
     <Routes>
       <Route path ='/' element={<ItemListConteiner />} />
       <Route path = '/categoria/:categoriaId' element={ <ItemListConteiner />} />
       <Route path = '/cart' element ={ <Cart />} />
       <Route path = '/detalle/:detalleid' element = {<ItemDetailContainer /> } />
     </Routes>
     </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
