import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import searchYoutube from 'youtube-api-v3-search';
import Card from '../components/Card';
import { API_KEY_YT } from '../services/api';
// import Button from '../components/Button';
import logo from './logo.png';
import { Container } from './styles';
function Home() {
  const [result, setResult] = useState({});
  const [fetching, setFetching] = useState(0);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    retorno();
  };

  const retorno = () => {
    const options = {
      q: 'queen',
      // q: query,
      part: 'snippet',
      type: 'video',
    };
    setFetching(1);
    searchYoutube(API_KEY_YT, options).then((res) => {
      setResult(res.items);
      setFetching(2);
    });
  };
  // console.log(result);

  return (
    <Container>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="search" placeholder="pesquise a banda" ref={register} />
        <button type="submit">Pesquisar</button>
      </form>
      {console.log('result', result)}
      {fetching === 2 && (
        <>
          {console.log('entrei')}
          {result.map((item) => {
            console.log('item', item);
            return (
              <Card
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
        </>
      )}
    </Container>
  );
}

export default Home;
