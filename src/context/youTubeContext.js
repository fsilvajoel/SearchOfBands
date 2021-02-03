import React, { createContext, useContext, useState } from 'react';
import { API_KEY_YT, getDataTicketMaster } from '../services/api';
import searchYoutube from 'youtube-api-v3-search';
import { useHistory } from 'react-router-dom';

export const Context = createContext({});

export function YouTubeProvider({ children }) {
  const [youTubeData, setYouTubeData] = useState([]);
  const [ticketMasterData, setTicketMasterData] = useState({});
  const [fetching, setFetching] = useState(0);
  const history = useHistory();
  const updateData = (query) => {
    const optionsForYT = {
      q: query,
      part: 'snippet',
      type: 'video',
    };
    setFetching(1);
    getDataTicketMaster(query).then((res) => {
      console.log('ticketMasterData', res);
      setTicketMasterData(res);
    });

    searchYoutube(API_KEY_YT, optionsForYT).then((res) => {
      setYouTubeData(res.items);
      console.log('youTubeData', res);
      setFetching(2);
      history.push('/list');
    });
  };

  return (
    <Context.Provider value={{ youTubeData, ticketMasterData, fetching, updateData }}>{children}</Context.Provider>
  );
}

export const useSearch = () => {
  return useContext(Context);
};
