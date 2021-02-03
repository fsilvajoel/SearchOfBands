import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import searchYoutube from 'youtube-api-v3-search';

import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { API_KEY_YT, getDataTicketMaster } from '../../services/api';

import { Container } from './styles';

function Search() {
  const { register, handleSubmit } = useForm();
  const [youTubeData, setYouTubeData] = useState({});
  const [ticketMasterData, setTicketMasterData] = useState({});
  const [fetching, setFetching] = useState(0);
  const findData = (query) => {
    const optionsForYT = {
      q: query,
      part: 'snippet',
      type: 'video',
    };
    setFetching(1);
    getDataTicketMaster(query).then((res) => {
      setTicketMasterData(res);
    });
    searchYoutube(API_KEY_YT, optionsForYT).then((res) => {
      setYouTubeData(res.items);
      setFetching(2);
    });
  };

  const onSubmit = (data) => {
    findData(data.search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <input name="search" placeholder="Pesquise a banda" ref={register} />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Container>
    </form>
  );
}

export default Search;
