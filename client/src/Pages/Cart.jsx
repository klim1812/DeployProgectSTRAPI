import React, {  useState } from 'react';
import Header from '../ComponentsPage/Header';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SegmentCart from '../Cards/SegmentCart';
import { Button, Card, Typography } from '@mui/material';
import ModalOrder from '../Modal/ModalOrder';
import { CART_RODUCTS } from '../ApolloQuery/CartProducts';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { AUTH_ROUTE } from '../utils';
import Footer from '../ComponentsPage/Footer';
import {  useCart } from "react-use-cart";

 function Cart() {
  const page_id = Object.keys(sessionStorage);

  const {items,totalItems,cartTotal, emptyCart} = useCart();
  
  const listCardId = page_id.filter(el => el.includes('id')).map(item =>sessionStorage.getItem(item));
  const [cartId,setCartId] = useState(listCardId );
   const [openOrder, setOpenOrder] = useState(false);
 console.log(items)

   const {data, loading,error} = useQuery(CART_RODUCTS, {variables: {arr:cartId[0] ? cartId: ''}});
   
   if(loading){
     return<h2>...loading</h2>
 }
 if(error){
     return<h2>Error...</h2>
 };
 

const handOpenOrder = () => {
  setOpenOrder(true)
};
const handCloseOrder = (value) => {
  setOpenOrder(value)
};

const arrCart = data.products.data;
 
    return (
      <>
   {/* <Header/> */}
   
   <Box>
          {items.map((row,index) => (
           <Card sx={{ marginTop:1}}><SegmentCart row={row} key={row.id} /></Card>
          )) }</Box>
           
    <div>   
         
          <Paper sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            <Typography sx={{margin:2}}>Количество товаров в корзине: {totalItems}</Typography>
              <Typography sx={{margin:2}}>Общая сумма заказа:  {cartTotal}$ </Typography>

          <Button variant="text" sx={{margin:2}} onClick={handOpenOrder }>Оформить заказ</Button>
           <NavLink to={AUTH_ROUTE}><Button variant="text" sx={{margin:2}} >Авторизация</Button></NavLink>
          <Button variant="text" sx={{margin:2}} onClick={() => emptyCart()}>Очистить корзину</Button>
           </Paper>
    </div>

    <Box> <ModalOrder close_order={handCloseOrder} order ={openOrder} data={items} /></Box>
    <Box></Box>
    <Footer/>
      </>
    );
}


export default Cart;