import axios from 'axios';
import {POKE_API_URL} from '@env';

export const pokemonAPI = axios.create({
  baseURL: POKE_API_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
