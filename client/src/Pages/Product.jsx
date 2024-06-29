import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Header from '../ComponentsPage/Header';
import CarouselUi from '../ComponentsPage/CarouselUi';
import { PRODUCT } from '../ApolloQuery/Product';
import { useQuery,useReactiveVar } from '@apollo/client';
import { make_productid } from '..';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(name, size, quantity) {
  return {name, size, quantity  };
}


function Media(props) {
  const product_id= useReactiveVar(make_productid);
  const currentUrl = window.location.pathname;
  let del = '/product_page/';
let page_id =currentUrl.replace(del,'')
  console.log(product_id)
  const {data:dataOneProduct, loading:load,error} = useQuery(PRODUCT, {variables: {id:page_id}});

  if(load){
    return<h2>...loading</h2>
}
if(error){
    return<h2>Error...</h2>
};
const product_object = dataOneProduct.product.data.attributes;
const imageList =product_object.image.data
const rows = [
  createData('Тип компрессора',product_object.compressorType,'--'),
  createData('Холодовая мощность',product_object.coolPower,'kWt'),
  createData('Тепловая мощность', product_object.heatPower,'kWt'),
  createData('Мощность Btu', product_object.powerBtu,'Btu/h'),
  createData('Тип фреона', product_object.freon,'--'),
  createData('Тип компрессора',product_object.compressorType,'--'),
  createData('Холодовая мощность',product_object.coolPower,'kWt'),
  createData('Тепловая мощность', product_object.heatPower,'kWt'),
  createData('Мощность Btu', product_object.powerBtu,'Btu/h'),
  createData('Тип фреона', product_object.freon,'--'),
];


console.log(product_object)

  const { loading = false } = props;


  return (
    <Card sx={{ maxWidth: "xl", m: 2, minHeight:"100vh" }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
           `${product_object.name}  ${product_object.brand}`
          
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            `Модель ${product_object.model}`
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CarouselUi image ={imageList}/>
     
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Box >
            <Typography variant='h6'>Описание:</Typography>
            <Typography >{product_object.description}</Typography>
            <Typography variant='h6'>Технические характеристики:</Typography>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Наименование</StyledTableCell>
            <StyledTableCell align="right">-</StyledTableCell>
            <StyledTableCell align="right">ед.</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Product() {
  return (
    <div>
        <Header/>
     
      <Media />
    </div>
  );
}