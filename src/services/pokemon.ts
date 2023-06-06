import {QueryKey} from '@tanstack/react-query';
import {pokemonAPI} from '@utils';
import {IPokemonsList} from '@interfaces';
import {apiToPokemonsList} from '@adapters';

export const PokemonService = {
  fetchAllPokemons: async ({queryKey}: {queryKey: QueryKey}) => {
    const {1: limit} = queryKey;
    const {data} = await (pokemonAPI.get(`/pokemon?limit=${limit}`) as Promise<{
      data: IPokemonsList;
    }>);
    const mappedData = apiToPokemonsList(data);
    return mappedData;
  },
};
