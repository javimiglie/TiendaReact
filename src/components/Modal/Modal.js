import './Modal.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const Modal = ({ handleClose, open, children, title }) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
