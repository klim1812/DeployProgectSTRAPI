import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3
};

export default function ModalEmail({email}) {
  const [opens, setOpens] = React.useState(true);  
  const handleClose = () => setOpens(false);

  function cleanCart(){
      setOpens(false);
       };
       
  return (
    <div>
      
      <Modal
        open={opens}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Ваш заказ принят и будет обработан в ближайшее время !
          </Typography>
          <Button onMouseDown={email}  onMouseUp={cleanCart}>OK</Button>
        </Box>
      </Modal>
    </div>
  );
};