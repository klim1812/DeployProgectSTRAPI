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
import TelegramIcon from '@mui/icons-material/Telegram';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';


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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [size,setSize] = React.useState(false);
  const {addItem} = useCart();
  const currentUrl = window.location.href;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClick = () =>{
   
      setSize(true);
  };
  const handleUpClick = () =>{
    setSize(false);
};
const handleClickShare = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};
const copyLink = () =>{
  navigator.clipboard.writeText(currentUrl)
  .then(() => {
    
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
  handleClose();
}

const open = Boolean(anchorEl);
  const oneUrl = new Object(data.attributes.image.data.map(res => [res.attributes.url]));



  return (
    <Card sx={{ minWidth: 345,maxWidth: 345,marginTop:1}} >
      
      <CardHeader
         
        action={
          <IconButton aria-label="settings" onMouseDown={()=>{handleClick()}}  onMouseUp={() => {
            handleUpClick();
            addItem({id:data.id,name:data.attributes.name,model:data.attributes.model,
              price:data.attributes.price,image:HOST_STRAPI + oneUrl[0]});
                  
              }} >
            <AddShoppingCartIcon color={size ? 'secondary' : 'warning'} fontSize={size ? 'large' : 'medium' }/>
          </IconButton>
        }
        title={<Typography color='primary' >{data.attributes.name}</Typography>}
        subheader={<Typography color='primary' variant='h6'>{data.attributes.brand_name}</Typography>}
      />
      
      <CardMedia
        component="img"
        height="250"
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

           <div>
      <IconButton variant="contained" onClick={handleClickShare}>
       <Tooltip title='Поделиться'><ShareIcon color='primary'/> </Tooltip>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',  
                      
        }}
      >
       <TelegramIcon  sx={{fontSize:'50px', borderRadius:'25px', background:'#1e90ff'}} onClick={copyLink}/>
       
       
      </Popover>
    </div>

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