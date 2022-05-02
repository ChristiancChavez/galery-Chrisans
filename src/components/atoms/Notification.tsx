import React, { useState } from 'react';
import {Snackbar, Button} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


type notificationTypes = {
  status: "error" | "warning" | "info" | "success",
  buttonClose: false | true
}
const Notification =({status, buttonClose}: notificationTypes) => {
  
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const message = () => {
    switch(status) {
      case 'error': return 'Error, vuelve a intentarlo.';
      case 'success': return 'Exitoso,todo salio bien.';
      case 'info': return 'Informate, revisa algo.';
      case 'warning': return 'Precaución, algo no salio tan bien.';
      default: return 'Exitoso,Todo salio bien.'
    }
  };

  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert data-testid='notification' onClose={handleClose} severity={status} sx={{ width: '100%' }}
        aria-label={message()}
      action={ buttonClose &&
        <Button color="inherit" size="small" aria-label='Botón para Cerrar el alert'>
          Cerrar
        </Button>
        }
      >
        {message()}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
