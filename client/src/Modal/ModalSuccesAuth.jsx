import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CART_ROUTE } from '../utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3
};

export default function SuccesAuth({isAuth}) {
  const [opens, setOpens] = useState(true); 
  // const [openOrder, setOpenOrder] = useState(false); 
  const handleClose = () => {
    localStorage.setItem('token',isAuth.login.jwt);
    localStorage.setItem('user_id',isAuth.login.user.id)
    setOpens(false);}
//   const handleOpenOrder = () => {setOpenOrder(true);localStorage.setItem('token',isAuth.login.jwt);localStorage.setItem('user_id',isAuth.login.user.id)};
// console.log(isAuth)
  return (
    <div>
      
      <Modal
        open={opens}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          "Вы авторизованы !"
          </Typography>
        <NavLink to={CART_ROUTE}><Button onClick={isAuth ? handleClose : ''}>Ok</Button></NavLink>
        </Box>
      </Modal>
    </div>
  );
};