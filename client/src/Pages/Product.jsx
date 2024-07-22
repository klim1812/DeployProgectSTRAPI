import  React,{useState} from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Header from '../ComponentsPage/Header';
import CarouselUi from '../ComponentsPage/CarouselUi';
import { PRODUCT } from '../ApolloQuery/Product';
import { useQuery} from '@apollo/client';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Footer from '../ComponentsPage/Footer';
import { Seo } from '../Seo/Seo';
import { useCart } from 'react-use-cart';
import { HOST_STRAPI } from '../utils';
import AdbIcon from '@mui/icons-material/Adb';

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
  const [size,setSize] = useState(false);
  const {addItem} = useCart();
  const currentUrl = window.location.pathname;
  let del = '/product_page/';
let page_id =currentUrl.replace(del,'')
  
  const {data:dataOneProduct, loading:load,error} = useQuery(PRODUCT, {variables: {id:sessionStorage.getItem('product_id')}});
  
  if(load){
    return<h2>...loading</h2>
}
if(error){
    return<h2>Error...</h2>
};
console.log(dataOneProduct.product)
const product_object = dataOneProduct.product.data.attributes;
const imageList =product_object.image.data
const rows = [
  createData('Тип компрессора',product_object.compressorType,'--'),
  createData('Холодовая мощность',product_object.coolPower,'kWt'),
  createData('Тепловая мощность', product_object.heatPower,'kWt'),
  createData('Мощность Btu', product_object.powerBtu,'Btu/h'),
  createData('Тип фреона', product_object.freon,'--'),
  createData('Уровень шума',product_object.noise,'db'),
  createData('Количество Фаз',product_object.phases,'--'),
  createData('Минимальная t* улицы', product_object.workUp,'--'),
  createData('Габариты нар.блока', product_object.sizeOut ,'mm'),
  createData('Габариты вн.блока', product_object.sizeIn,'mm'),
];
console.log(imageList)
const handleClick = () =>{
   
  setSize(true);
};
const handleUpClick = () =>{
setSize(false);
};

let cartImage = imageList.map(el => el.attributes.url)
console.log(cartImage )
const handleCartClick = () =>{
  addItem({id:page_id,name:product_object.name,model:product_object.model,
    price:product_object.price,image:HOST_STRAPI + cartImage});
  };

  const { loading = false } = props;

  return (
    <>
           <Seo
        title={product_object.model}
        description={product_object.description}
        type="webapp"
        name={product_object.brand}
      />
    <Card sx={{ maxWidth: "xl", m: 2, minHeight:"100vh" }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings" onMouseDown={handleClick}  onMouseUp={
              handleUpClick} onClick={handleCartClick}>
              <AddShoppingCartIcon color={size ? 'secondary' : 'warning'} fontSize={size ? 'large' : 'medium' }/>
              {/* <MoreVertIcon /> */}
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
        <CarouselUi data ={product_object } />
     
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
            <StyledTableRow key={row.slug}>
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
    </>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Product() {
  return (
    <div>
      {/* <Header/> */}
      <Media />
      <Footer/>
    </div>
  );
}