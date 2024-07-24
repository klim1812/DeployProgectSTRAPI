import React  from 'react';
import  Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useCart } from "react-use-cart";




 function SegmentCart({row}) {

    const {updateItemQuantity,removeItem,} = useCart();


    return (
   <>
   
      <Card sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',margin:1}}>
       
      <CardMedia component="img"
        sx={{ height: 140, width: 140 }} image={row.image}/>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {row.name }
        </Typography>
        <Typography variant="h5" component="div">
       {row.brand} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {row.model}
        </Typography>
        <Typography variant="body2">
        {row.price}$ 
        </Typography>
      </CardContent>
      <CardActions></CardActions>
      <CardActions>
      <Button variant="outlined"   onClick={() =>
                          updateItemQuantity(row.id, row.quantity + 1)
                        }
                    >+</Button>
                    <div >{row.quantity}</div>

                <Button variant="outlined" onClick={() =>
                          updateItemQuantity(row.id, row.quantity - 1)
                        }
               >-</Button>
      </CardActions>
      <CardActions>
      <Button variant="outlined" onClick={() => removeItem(row.id)} >Удалить</Button>
      </CardActions>
      
    </Card>
    
    </>
    );
}


export default SegmentCart;