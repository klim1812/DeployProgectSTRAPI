import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { Box, Container,Typography,Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import { REGISTR_MUTATION } from '../ApolloMutation/Ragistration';
import MistakeConfirmParol from './ModalMistake';
import MistakeStrictField from './ModalMistakeField';
import MistakeServer from './ModalMistakeServer';
import SuccesRegistr from './ModalSuccesRegistr';
import { useNavigate } from 'react-router-dom';
import { CART_ROUTE } from '../utils';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius:5
  };

  export default function ModalRegistr() {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [parol,setParol] = useState("");
    const [confirmParol,setConfirmParol] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [blockedParol,setBlockedParol] = useState(false);
    const [mistakeParol,setMistakeParol] = useState(false);
    const [mistakeStrictField,setMistakeStrictField] = useState(false);

    const [setRegistr,{loading,error, data: registr_data}] = useMutation(REGISTR_MUTATION, { errorPolicy : "all" });
    if(loading){
      return<h2>...loading</h2>
  }


  const inputUsername = (e) => setUsername( e.target.value);
  const inputParol = (e) => {setParol(e.target.value);
    localStorage.setItem('parol',e.target.value)
  };
  const inputConfirmParol = (e) => setConfirmParol(e.target.value);
  const inputEmail = (e) => {setEmail(e.target.value);
    localStorage.setItem('email',e.target.value)
  };
  const inputPhone = (e) => setPhone(e.target.value);
  const inputAddress = (e) =>setAddress(e.target.value);


    const disabledParol = () => {
     setBlockedParol(parol === confirmParol ? true :'')};


    function mistakeParolOpen(){
      if(parol !== confirmParol)
      setMistakeParol(true) ;
      setMistakeStrictField(username && parol && email && phone ? true : '')};

    const Registration = () => {if (parol === confirmParol)
      {setRegistr({variables:{user: username ,email: email, parol:parol,
          phone: phone,address:address }})}
       
        };
        function setRoute(e){
          navigate(e)
     };

 
    return (
   
         <Modal open={true}>
          <Container  sx={{...style,maxWidth:'550px'}}>
        <Button onClick={()=>setRoute(CART_ROUTE)}>Закрыть</Button>
      <Box sx={{
      
      bgcolor: 'background.paper',
  }}>
        <Box sx={{textAlign:'center'}}><Typography variant='h6'>Заполните форму регистрации</Typography></Box>

        <TextField label="Имя,Фамилия *" variant="filled" color="primary" focused fullWidth  onChange={inputUsername} sx={{margin:'5px'}}/>
        <TextField label="Введите Email *" variant="filled" color="primary" focused fullWidth onChange={inputEmail} sx={{margin:'5px'}}/>
        <TextField label="Придумайте Пароль *" variant="filled" color="primary" focused fullWidth onChange={inputParol} sx={{margin:'5px'}}/>
        <TextField label="Повторите пароль *" variant="filled" color="primary" focused fullWidth disabled={blockedParol} onKeyUp={disabledParol} onChange={inputConfirmParol} sx={{margin:'5px'}}/>
        <TextField label="Номер телефона *" variant="filled" color="primary" focused fullWidth onChange={inputPhone} sx={{margin:'5px'}}/>
        <TextField label="Адрес доставки" variant="filled" color="primary" focused fullWidth onChange={inputAddress} sx={{margin:'5px'}}/>
    {  username && parol && email && phone ?
     <Button variant="outlined" sx={{margin:1}} onClick={mistakeParolOpen} onMouseUp={Registration}>Регистрация</Button> : ''}
    </Box>
   
    <Box>{mistakeParol ? <MistakeConfirmParol /> : ""}</Box>
    <Box>{mistakeStrictField ? <MistakeStrictField /> : ""}</Box>
    <Box>{error ? <MistakeServer/> : ""}</Box>
    <Box>{registr_data ? <SuccesRegistr/> : ""}</Box>
    {/* <Box>{registr_data ? <ModalAuth/> : ""}</Box> */}
    
      </Container>
      </Modal>
    );
  }