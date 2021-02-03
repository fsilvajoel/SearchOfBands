import React, { useState } from 'react';

import * as moment from 'moment';
import { Container, Title, Description, Item } from './styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TvIcon from '@material-ui/icons/Tv';
import ScheduleIcon from '@material-ui/icons/Schedule';

import Modal from '../Modal/index';
function Card({ channelTitle, description, publishTime, thumbnails, title, id }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <img src={thumbnails?.high?.url} alt={title} />
      <Title>{title}</Title>
      <div className="media-resources">
        <Item>
          <TvIcon />
          <label>{channelTitle}</label>
        </Item>
        <Item>
          <ScheduleIcon />
          <label>{moment(publishTime).format('DD/MM/YYYY')}</label>
        </Item>
        <Button variant="outlined" onClick={handleClickOpen}>
          <PlayArrowIcon />
          Play!
        </Button>
        <Modal open={open} onClose={handleClose} id={id} title={title} />
      </div>
      <p>Descrição do Vídeo</p>
      <Description>{description}</Description>
    </Container>
  );
}

export default Card;
