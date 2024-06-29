

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';

const itemData = [
    
  {
    img: 'https://aussiedlerbote.de/wp-content/uploads/2022/09/kak-rabotaet-teplovoj-nasos.jpg',
    title: 'teplo-nasos',
  },
  {
    img: 'https://www.holod-komplekt.com.ua/image/cache/catalog/tovary/holodilnyje-agregaty/holodilnyje-agregaty-frascold-kategoriya-600x600.png',
    title: 'holod-agregate',
  },
  
  {
    img: 'https://www.tehnoclimate.com.ua/wp-content/uploads/2019/10/kolonnyj-konditsioner-1-1024x1024.jpg',
    title: 'cond-colon',
  },
  {
    img: 'https://lumax.com.ua/wp-content/uploads/2015/07/VYT-100P-mini-montag-1.gif',
    title: 'vent1',
  },
  {
    img: 'https://images.prom.ua/2204972473_w640_h640_chiller-5-100-kvt.jpg',
    title: 'chiller',
  },
  
  {
      img: 'https://www.kievkomfort.com.ua/image/catalog/conditioner-for-home%20(1).jpg',
      title: 'cond-split',
    },
];
  

function Banner() {
  
    return(
        <Box maxWidth= 'xl' sx={{
            display: 'flex',
            minHeight:'100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        justifyContent:'space-evenly'
        // height: '100%'
        }}>
        <ImageList 
       
         cols={6}
         >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    );
  }
  export default  Banner;