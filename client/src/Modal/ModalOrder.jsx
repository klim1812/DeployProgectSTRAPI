import  React,{useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_ORDER } from '../ApolloMutation/Order';
import ModalEmail from './ModalEmail';
import {  useCart } from "react-use-cart";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius:5
};


export default function ModalOrder({order,close_order,data,all_summ}) {
  const [openEmail, setOpenEmail] = useState(false);
  const {cartTotal} = useCart();
  const [setCreateOrder,{loading ,error , data: order1}] = useMutation(CREATE_ORDER, { errorPolicy : "all" });

  if(loading){
    return<h2>...Идет отправка заказа на Ваш Email</h2>
    }
  if(error){return<h2>...error</h2>
  };

let emailStore = localStorage.getItem('email');

    function orderMail(){ // отправляем данные пользователя на сервер и сервер отправляет письмо
      setCreateOrder({variables:{email: emailStore,  user: localStorage.getItem('user_id'), order: sessionStorage.getItem('order_text')}})
      sessionStorage.clear();
      localStorage.removeItem('parol');
    };

    let htmlCopy;
    let form_order;
    function Confirm(){
      htmlCopy = document.querySelector(".order_list");
      form_order = htmlCopy.outerHTML;
      sessionStorage.setItem('order_text',form_order);
      setOpenEmail(true);
      
    };

  const handleClose = () => close_order(false);
  
  function cleanCart(){
    localStorage.clear();
    
  };
  const isAuth = localStorage.getItem('token');

  return (
   
        <>
      <Modal
        open={order1 ? false : order}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
  {isAuth ? <Box id="modal-modal-title" sx={style}  >
    <Box className='order_list'>
  <Typography id="modal-modal-title" variant="h6" component="h2">
          "Ваш заказ сформирован !"
          </Typography>
   <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
           {<TableRow>
            <TableCell align="center">Наименование</TableCell>                          
            <TableCell align="center">Производитель</TableCell>
            <TableCell align="center">Модель</TableCell>
            <TableCell align="center">Цена$</TableCell>
            <TableCell align="center">Количество</TableCell>
            <TableCell align="center">Сумма</TableCell>
            
          </TableRow>}
        </TableHead> 
        <TableBody>
          {data ? data.map((row) => (
            <TableRow>
           <TableCell>{row.name}</TableCell>
           <TableCell>{row.brand}</TableCell>
           <TableCell>{row.model}</TableCell>
           <TableCell>{row.price}</TableCell>
           <TableCell>{row.quantity}</TableCell>
           <TableCell>{row.itemTotal}</TableCell>
           </TableRow>
          )) :""}
          
          <TableRow>
         
          </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    <Paper sx={{margin:2}}><Typography sx={{margin:1}}>Общая сумма заказа: {cartTotal}  $</Typography></Paper>
    </Box>
    <div>   
          
          <Paper sx={{display:'flex'}}>
           
          <NavLink ><Button variant="outlined" sx={{margin:2}} onClick={Confirm}  >Подтвердить</Button></NavLink>
          
           </Paper>
    </div>
    <div>{openEmail ? <ModalEmail email={orderMail} /> : ''}</div>
    <div></div>
    </Box> : <Box id="modal-modal-title" sx={style}><Typography>Для оформления заказа необходимо войти в Ваш аккаунт или зарегестрироваться</Typography></Box>}
    
    </Modal>
      </>
   
  );
}