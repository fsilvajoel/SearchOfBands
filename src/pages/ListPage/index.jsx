import React from 'react';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import { useSearch } from '../../context/youTubeContext';

import { Base } from '../baseStyles';
import { Container } from './styles';
function ListPage() {
  const { youTubeData } = useSearch();

  console.log('iaisudh', youTubeData);
  return (
    <Base>
      <Menu />
      <Container>
        {youTubeData?.map((item) => {
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
