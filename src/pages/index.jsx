import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import searchYoutube from 'youtube-api-v3-search';

import { API_KEY_YT, getDataTicketMaster } from '../services/api';

import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ListPage from './ListPage';
import { Base } from './baseStyles';
import logo from '../logo.png';
function Home() {
  const [youTubeData, setYouTubeData] = useState({});
  const [ticketMasterData, setTicketMasterData] = useState({});
  const [fetching, setFetching] = useState(0);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    findData(data.search);
  };

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

  return (
    <>
      {fetching === 2 ? (
        <ListPage data={youTubeData} ticketMaster={ticketMasterData} />
      ) : (
        <Base>
          <img src={logo} alt="logo" height="150px" />
          <h1>Search of Bands</h1>
          <p>Sua banda preferida a um click!</p>
          {/* <div style={{ backgroundColor: 'white' }}> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input name="search" placeholder="Pesquise a banda" ref={register} /> */}
            <TextField name="search" id="search" label="Pesquise a banda" color="primary" inputRef={register} />
            <Button variant="contained" type="submit">
              <SearchIcon />
            </Button>
          </form>
          {/* </div> */}
        </Base>
      )}
    </>
  );
}

export default Home;
