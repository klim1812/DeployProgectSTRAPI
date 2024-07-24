
import './App.css';
import { Routes,Route} from 'react-router-dom';
import { ABOUT_ROUTE, AUTH_ROUTE, CART_ROUTE, CATALOG_ROUTE, CONTACT_ROUTE, HOME_PAGE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, SUBCATALOG_ROUTE } from './utils';
import Layout from './ComponentsPage/Layout';
import HomePage from './Pages/HomePage';
import Shop from './Pages/Shop';
import Catalog from './Pages/Catalog';
import Subcatalog from './Pages/Subcatalog';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ModalAuth from './Modal/ModalAuth';
import ModalRegistr from './Modal/ModalRegistr';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import NoMatch from './Pages/NoMatch';


function App() {
  return (
    <>
    
    <Routes>

          <Route path='/'  element={<Layout />}>

          <Route path="*" element={<NoMatch />} />
          <Route   path={HOME_PAGE} key={HOME_PAGE} element={<HomePage/>}/>
          <Route  path={SHOP_ROUTE} key={SHOP_ROUTE} element={<Shop/>}/>
          <Route  path={CATALOG_ROUTE} key={CATALOG_ROUTE} element={<Catalog/>}/>
          <Route  path={SUBCATALOG_ROUTE} key={SUBCATALOG_ROUTE} element={<Subcatalog/>}/>
          <Route  path={PRODUCT_ROUTE+'/:slug'} key={PRODUCT_ROUTE} element={<Product/>}/>
          <Route  path={CART_ROUTE} key={CART_ROUTE} element={<Cart/>}/>
          <Route  path={AUTH_ROUTE} key={AUTH_ROUTE} element={<ModalAuth/>}/>
          <Route  path={REGISTRATION_ROUTE} key={REGISTRATION_ROUTE} element={<ModalRegistr/>}/>
          <Route  path={ABOUT_ROUTE} key={ABOUT_ROUTE} element={<About/>}/>
          <Route  path={CONTACT_ROUTE} key={CONTACT_ROUTE} element={<Contacts/>}/>

          </Route>

      </Routes>
      
      </>
  );
}



export default App;
