import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HOST_STRAPI, PRODUCT_ROUTE } from '../utils';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from 'react-use-cart';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardProduct({data}) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [size,setSize] = React.useState(false);
  const {addItem} = useCart();
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = () =>{
   
      setSize(true);
  };
  const handleUpClick = () =>{
    setSize(false);
};

  const oneUrl = new Object(data.attributes.image.data.map(res => [res.attributes.url]));


  return (
    <Card sx={{ minWidth: 345,maxWidth: 345,marginTop:1}} >
      
      <CardHeader
         
        action={
          <IconButton aria-label="settings" onMouseDown={()=>{handleClick()}}  onMouseUp={() => {
            handleUpClick();
            addItem({id:data.id,name:data.attributes.name,model:data.attributes.model,
              price:data.attributes.price,image:HOST_STRAPI + oneUrl[0]});
            // sessionStorage.setItem(data.id+'id',data.id);          
              }} >
            <AddShoppingCartIcon color={size ? 'secondary' : 'warning'} fontSize={size ? 'large' : 'medium' }/>
          </IconButton>
        }
        title={<Typography color='primary' >{data.attributes.name}</Typography>}
        subheader={<Typography color='primary' variant='h6'>{data.attributes.brand}</Typography>}
      />
      
      <CardMedia
        component="img"
        height="194"
        image={HOST_STRAPI + oneUrl[0]}
        alt="Paella dish"
        onClick={()=>{sessionStorage.setItem('product_id',data.id);navigate(PRODUCT_ROUTE+'/'+ data.attributes.slug)}}
      />
      
      <CardContent >
        <Typography variant="body2" color='primary'>
        Модель:{data.attributes.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Мощность(Btu/h):{data.attributes.powerBtu}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.attributes.compressorType}
        </Typography>
        <Typography variant="body2" color='primary'>
        Цена {data.attributes.price} $
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon color='secondary'/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color='primary'/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon  />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Описание товара:</Typography>
          <Typography paragraph>
            {data.attributes.description}
          </Typography>
          <Typography paragraph>
       
          </Typography>
      
        </CardContent>
      </Collapse>
      
    </Card>
  );
}