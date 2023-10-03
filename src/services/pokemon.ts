import { QueryKey } from '@tanstack/react-query';
import { pokemonAPI } from '@utils';
import { IPokemonsList, PokemonDetail } from '@interfaces';
import { apiToPokemonsList } from '@adapters';

export const PokemonService = {
  fetchAllPokemons: async ({ queryKey }: { queryKey: QueryKey }) => {
    const { 1: limit, 2: offSet } = queryKey;
    const { data } = await (pokemonAPI.get(
      `/pokemon?offset=${offSet}&limit=${limit}`,
    ) as Promise<{
      data: IPokemonsList;
    }>);
    const mappedData = apiToPokemonsList(data);
    return mappedData;
  },
  fetchPokemonDetail: async ({ queryKey }: { queryKey: QueryKey }) => {
    const { 1: pokemonId } = queryKey;
    const { data } = await (pokemonAPI.get(`/pokemon/${pokemonId}`) as Promise<{
      data: PokemonDetail;
    }>);
    return data;
  },
};
