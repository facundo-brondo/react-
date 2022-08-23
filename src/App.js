import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './ItemListConteiner/about';
import Contact from './ItemListConteiner/contact';
import Home from './ItemListConteiner/home';
import NavBar from './NavBar/NavBar';

function App() {
  
  
  return (
    <div >

      <BrowserRouter>
      <Routes>
        <Route path='/' element= { < NavBarExample /> } >
        <Route index element= { < Home /> } />
        <Route path='about' element= { < About /> } />
        <Route path='about' element= { < Contact /> } />

        <Route path='*' element= { <Navigate replace to="/" /> }/>
        </Route>
      </Routes>
      </BrowserRouter>

       <h1>Hola Mundo </h1>

     < ItemListConteiner

     greeting= "greeting"
     />
       
     
      
      
    </div>
  );
}

export default App;
