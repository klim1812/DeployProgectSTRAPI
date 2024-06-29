
import './App.css';
import { Routes,Route, Outlet } from 'react-router-dom';
import { CART_ROUTE, CATALOG_ROUTE, HOME_PAGE, PRODUCT_PAGE, PRODUCT_ROUTE, SHOP_ROUTE, SUBCATALOG_ROUTE } from './utils';
import Layout from './ComponentsPage/Layout';
import Home_page from './Pages/Home_page';
import Shop from './Pages/Shop';
import Catalog from './Pages/Catalog';
import Subcatalog from './Pages/Subcatalog';
import Cart from './Pages/Cart';
import Product from './Pages/Product';

function App() {
  return (
    <>
    <Routes>

          <Route path='/'  element={<Layout />}>

          <Route index  path={HOME_PAGE} key={HOME_PAGE} element={<Home_page/>}/>
          <Route  path={SHOP_ROUTE} key={SHOP_ROUTE} element={<Shop/>}/>
          <Route  path={CATALOG_ROUTE} key={CATALOG_ROUTE} element={<Catalog/>}/>
          <Route  path={SUBCATALOG_ROUTE} key={SUBCATALOG_ROUTE} element={<Subcatalog/>}/>
          <Route  path={PRODUCT_ROUTE+'/:id'} key={PRODUCT_ROUTE} element={<Product/>}/>
          <Route  path={CART_ROUTE} key={CART_ROUTE} element={<Cart/>}/>

          </Route>

      </Routes>
      </>
  );
}



export default App;
