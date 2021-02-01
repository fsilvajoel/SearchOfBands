import React from 'react';
import CardList from '../../components/Card';
import Menu from '../../components/Menu';
import { Base } from '../baseStyles';

function ListPage({ data }) {
  return (
    <Base>
      <Menu />
      <div style={{ margin: '100px 0 100px 0' }}>
        {data.map((item) => {
          return (
            <CardList
              key={item.id.videoId}
              channelTitle={item.snippet.channelTitle}
              description={item.snippet.description}
              publishedTime={item.snippet.publishedTime}
              thumbnails={item.snippet.thumbnails}
              title={item.snippet.title}
              id={item.id.videoId}
            />
          );
        })}
      </div>
    </Base>
  );
}

export default ListPage;
