import axios from 'axios';

export const API_KEY_YT = 'AIzaSyD-7kWuyTX5kYs4-8LllJciGCs7bii1FJQ';

// events.json?size=1&apikey=
const API_KEY_TM = 'BJJDuUOy8uTGfnCOsKN5e3ZfxI6EZiNS';
export const apiYouTube = axios.create({
  baseURL: '',
});

export const apiTicketMaster = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/',
});
