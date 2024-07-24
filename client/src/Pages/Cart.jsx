import React, {  useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SegmentCart from '../Cards/SegmentCart';
import { Button,Typography } from '@mui/material';
import ModalOrder from '../Modal/ModalOrder';
import { AUTH_ROUTE } from '../utils';
import {  useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';


 function Cart() {
  
  const {items,totalItems,cartTotal, emptyCart} = useCart();
  const navigate = useNavigate();
   const [openOrder, setOpenOrder] = useState(false);
 

const handOpenOrder = () => {
  setOpenOrder(true)
};
const handCloseOrder = (value) => {
  setOpenOrder(value)
};
function setRoute(e){
  navigate(e)
};

  return (
      <>
    
   <Box>
          {items.map((row) => (
           <SegmentCart row={row} key={row.id} />
          )) }</Box>
           
    <div>   
         
          <Paper sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            <Typography sx={{margin:2}}>Количество товаров в корзине: {totalItems}</Typography>
              <Typography sx={{margin:2}}>Общая сумма заказа:  {cartTotal}$ </Typography>

          <Button variant="text" sx={{margin:2}} onClick={handOpenOrder }>Оформить заказ</Button>
           <Button variant="text" sx={{margin:2}} onClick={()=>{
            setRoute(AUTH_ROUTE)}}>Авторизация</Button>
          <Button variant="text" sx={{margin:2}} onClick={() => emptyCart()}>Очистить корзину</Button>
           </Paper>
    </div>

    <Box> <ModalOrder close_order={handCloseOrder} order ={openOrder} data={items} /></Box>
    
      </>
    );
}


export default Cart;