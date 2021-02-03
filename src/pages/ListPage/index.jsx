import React from 'react';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import { Base } from '../baseStyles';
import { Container } from './styles';
function ListPage({ data, ticketMaster }) {
  return (
    <Base>
      <Menu />
      <Container>
        {/* <CardTicket data={ticketMaster} /> */}
        {data.map((item) => {
          return (
            <Card
              key={item.id.videoId}
              channelTitle={item.snippet.channelTitle}
              description={item.snippet.description}
              publishTime={item.snippet.publishTime}
              thumbnails={item.snippet.thumbnails}
              title={item.snippet.title}
              id={item.id.videoId}
            />
          );
        })}
      </Container>
    </Base>
  );
}

export default ListPage;
