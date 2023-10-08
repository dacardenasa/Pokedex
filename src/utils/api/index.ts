import axios from 'axios';
import { EXPO_PUBLIC_POKE_API_URL } from '@env';

export const pokemonAPI = axios.create({
  baseURL: EXPO_PUBLIC_POKE_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
