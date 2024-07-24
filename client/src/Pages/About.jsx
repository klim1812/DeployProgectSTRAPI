import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';

export default function About() {
  return (
    <>
    {/* <Header/> */}
    <Box sx={{  overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            
            <Typography>{item.text}</Typography>
            
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    
    </>
  );
}

const itemData = [
    
    {
      img: 'https://aussiedlerbote.de/wp-content/uploads/2022/09/kak-rabotaet-teplovoj-nasos.jpg',
      title: 'teplo-nasos',
      text: 'С первого дня работы магазин «CLIMATE» предлагает клиентам широкий ассортимент товаров по отличным ценам. Наше название стало синонимом качества. У нас вы всегда найдете большой выбор великолепной продукции, а также ограниченные серии и сезонные товары, которые впишутся в любой бюджет. Ознакомьтесь с нашим каталогом и приступайте к покупкам.'
    },
    {
      img: 'https://www.holod-komplekt.com.ua/image/cache/catalog/tovary/holodilnyje-agregaty/holodilnyje-agregaty-frascold-kategoriya-600x600.png',
      title: 'holod-agregate',
      text:'Компания «CLIMATE» прилагает все усилия, чтобы клиентам нравилось покупать здесь, и они приходили снова и снова. Поэтому мы считаем, что политика предоставления услуг должна быть справедливой, четкой и прозрачной. Вы можете ознакомиться с ней ниже. Не удалось найти интересующую информацию? Свяжитесь с нами.'
    },
    
    {
      img: 'https://static.wixstatic.com/media/68cbc5_cd11e4e6c6824a43a5ea40f19628353b~mv2.jpg/v1/fill/w_445,h_445,fp_0.50_0.50,lg_1,q_80,enc_auto/68cbc5_cd11e4e6c6824a43a5ea40f19628353b~mv2.jpg',
      title: 'cond-colon',
      text: 'Мы заботимся не только о выборе и монтаже оборудования , а и следим за его эксплуатацией, регулярно проводим техническое обслуживание.'
    },
    {
      img: 'https://lumax.com.ua/wp-content/uploads/2015/07/VYT-100P-mini-montag-1.gif',
      title: 'vent1',
      text: 'Наш инженерный отдел правильно подберет оборудование под Ваши задачи и подготовит проектную документацию.'
    },
    {
      img: 'https://images.prom.ua/2204972473_w640_h640_chiller-5-100-kvt.jpg',
      title: 'chiller',
      text:'Мы заботимся об окружающей среде и используем безопасные хладагенты, а также правильно утилизируем отработанные технические масла,газы и жидкости. Наши специалисты регулярно проходят курсы повышения квалификации, а так же имеют все разрешения и допуски работы со спец.средсвами по технике безопасности.'
    },
    
    {
        img: 'https://www.kievkomfort.com.ua/image/catalog/conditioner-for-home%20(1).jpg',
        title: 'cond-split',
        text:'Специалисты по монтажу оборудования не только качественно смонтируют его, а и будут аккуратны с Вашим помещением'
      },
  ];