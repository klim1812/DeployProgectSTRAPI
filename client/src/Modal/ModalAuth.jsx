import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import { Box, Container,FormControl,InputLabel,Input,FormHelperText, Typography, Modal } from '@mui/material';
import { useMutation } from '@apollo/client';
import { AUTH_MUTATION } from '../ApolloMutation/Auth';
import Stack from '@mui/material/Stack';
import ModalRegistr from './ModalRegistr';
import { NavLink, Navigate } from 'react-router-dom';
import { CART_ROUTE, REGISTRATION_ROUTE } from '../utils';
import SuccesAuth from './ModalSuccesAuth';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius:5,
    
  };

  export default function ModalAuth({open}) {
    
    const [openRegistr, setOpenRegistr] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [email, setEmail] = useState('');
    const [parol, setParol] = useState('');
   
    const [setAuth,{loading,error, data: auth_data}] = useMutation(AUTH_MUTATION, { errorPolicy : "all" });
    if(loading){
      return<h2>...loading</h2>
  }

function Auth(){
  setAuth({variables:{email:localStorage.getItem('email') ? localStorage.getItem('email') :email ,
    parol: localStorage.getItem('parol') ? localStorage.getItem('parol') : parol}});
};

const getEmail = (e)=>{
    setEmail(e.target.value)
    localStorage.setItem('email',e.target.value)
}
const getParol = (e)=>{
  setParol(e.target.value)
  localStorage.setItem('parol',e.target.value)
}

    const handleOpenRegistr = () => {
      setOpenRegistr(true);
    };
    
    return (
     
      <Modal open={true}>

          <Container  sx={{...style}}>
         <NavLink to={CART_ROUTE} > <Button >Close</Button></NavLink>
      <Box sx={{minWidth:'40%',display:'flex',flexDirection:'column', alignItems:'center'}}>

        <Typography variant='h6' sx={{alignContent:'center'}}>Авторизация</Typography>


  <Box sx={{maxWidth: '400px',}}>
          <FormControl sx={{margin:'15px'}}  fullWidth>
              <InputLabel htmlFor="my-input" >Введите Email </InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text"   value={localStorage.getItem('email') ?
                localStorage.getItem('email') :''} onChange={getEmail} />
         </FormControl>
         <FormControl  sx={{margin:'20px'}} fullWidth>
                  <InputLabel htmlFor="my-input">Введите Пароль </InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" value={localStorage.getItem('parol') ?
                    localStorage.getItem('parol') :''
                  } onChange={getParol}/>
         </FormControl>
  </Box>

    <Stack spacing={1} sx={{margin:2}}>
    <Button variant="outlined" onClick={Auth} >Войти</Button>
    <NavLink to={REGISTRATION_ROUTE}><Button variant="outlined">Регистрация</Button></NavLink>
    </Stack>
    </Box>
    {auth_data ?<SuccesAuth isAuth={auth_data}/> : ''}
      </Container>
      
        </Modal> 
     
    );
  }