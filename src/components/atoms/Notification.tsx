import React, { useState } from 'react';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


type notificationTypes = {
  status: "error" | "warning" | "info" | "success",
}
const Notification =({status}: notificationTypes) => {

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
  const action = (
    <IconButton
        size="small"
        aria-label="Botón para Cerrar el alert"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
  )

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} action={action}  sx={{ width: '100%' }}
    aria-label={message()} message={message()}/>
  );
}

export default Notification;
