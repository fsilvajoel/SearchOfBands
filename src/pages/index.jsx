import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import searchYoutube from 'youtube-api-v3-search';

import { API_KEY_YT } from '../services/api';
import ListPage from './ListPage';
import logo from './logo.png';
import { Base } from './baseStyles';
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

  return (
    <>
      {fetching === 2 ? (
        <ListPage data={result} />
      ) : (
        <Base>
          <img src={logo} alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="search" placeholder="pesquise a banda" ref={register} />
            <button type="submit">Pesquisar</button>
          </form>
          {console.log('result', result)}
        </Base>
      )}
    </>
  );
}

export default Home;
