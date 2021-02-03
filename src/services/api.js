import axios from 'axios';

export const API_KEY_YT = 'AIzaSyD-7kWuyTX5kYs4-8LllJciGCs7bii1FJQ';
const API_KEY_TM = 'BJJDuUOy8uTGfnCOsKN5e3ZfxI6EZiNS';

export const apiTicketMaster = axios.create({
  baseURL: 'https://app.ticketmaster.com',
});

export async function getDataTicketMaster(keyword) {
  const response = await apiTicketMaster
    .get(`/discovery/v2/`, {
      params: {
        keyword,
        apikey: API_KEY_TM,
      },
    })
    .catch((err) => Promise.reject(new Error(err)));
  return response.data;
}
