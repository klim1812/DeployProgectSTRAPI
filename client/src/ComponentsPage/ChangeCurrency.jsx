
import { useEffect, useState } from "react";
import { Box, Paper, Typography } from '@mui/material';
import axios from "axios";

function ChangeCurrency() {

    const src = "https://api.monobank.ua/bank/currency";


  const[articles,setArticles] = useState([]);
  useEffect(() => {
    axios
    .get(src,{currencyCodeA: 840})
       .then(data => {
        setArticles(data.data)
        
       })  
       .catch(function (error) {
        if (error.response) {
          // Запрос был сделан, и сервер ответил кодом состояния, который
          // выходит за пределы 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // Запрос был сделан, но ответ не получен
          // `error.request`- это экземпляр XMLHttpRequest в браузере и экземпляр
          // http.ClientRequest в node.js
          console.log(error.request);
        } else {
          // Произошло что-то при настройке запроса, вызвавшее ошибку
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
       )         
  },[]);
  let now = new Date();

  const USD = articles.filter(el => el.currencyCodeA === 840 );
  const EURO = articles.filter(el => el.currencyCodeA === 978 & el.currencyCodeB === 980);
  const EURO_USD = articles.filter(el => el.currencyCodeA === 978 & el.currencyCodeB === 840);

    return(
        <Box maxWidth= 'xl' >
          <Paper sx={{
            display: 'flex',
            minHeight:'100%',
      
        justifyContent:'space-evenly'
        
        }}>
          <Box sx={{minWidth:100}}><Typography>Курс валют: {now.getDate()}/{now.getMonth()+1}/{now.getFullYear()}</Typography></Box>
          <Box><Typography>USD/UAN {USD.map(item =>item.rateBuy.toFixed(2))}/{USD.map(item =>item.rateSell.toFixed(2))}</Typography></Box>
          <Box><Typography>EURO/UAN {EURO.map(item =>item.rateBuy.toFixed(2))}/{EURO.map(item =>item.rateSell.toFixed(2))}</Typography></Box>
          <Box><Typography>EURO/USD {EURO_USD.map(item =>item.rateBuy.toFixed(2))}/{EURO.map(item =>item.rateSell.toFixed(2))}</Typography></Box>
        
        
        </Paper>
        
      </Box>
    );
  }
  export default  ChangeCurrency;