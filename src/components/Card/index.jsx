import React from 'react';
import { Container, Title } from './styles';

function CardList({ channelTitle, description, publishedTime, thumbnails, title, id }) {
  return (
    <Container>
      <Title>{channelTitle}</Title>
      <p>{description}</p>
      <p>{publishedTime}</p>
      <img src={thumbnails?.default?.url} alt={title} />
      <p>{title}</p>
      <p>{id.videoId}</p>
    </Container>
  );
}

export default CardList;
