import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import YouTube from 'react-youtube';

function Modal({ onClose, open, id, title }) {
  const handleClose = () => {
    onClose();
  };

  const opts = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby={title} open={open} fullWidth>
      <YouTube videoId={id} opts={opts} />
    </Dialog>
  );
}

export default Modal;
