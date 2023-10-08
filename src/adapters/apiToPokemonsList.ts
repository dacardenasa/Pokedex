import {
  IPokemon,
  IPokemonSingle,
  IPokemonsList,
  IPokemonsListData,
} from '@interfaces';
import { EXPO_PUBLIC_POKE_API_URL_IMAGE } from '@env';

const transformPokemonsData = (pokemons: IPokemonSingle[]) => {
  if (!pokemons.length) {
    return [];
  }
  const newPokemonsList: IPokemon[] = pokemons.map(
    ({ url, name }: IPokemonSingle) => {
      const pokemonId: string = url.slice(34, url.length - 1);
      const imageURL: string = `${EXPO_PUBLIC_POKE_API_URL_IMAGE}/${pokemonId}.png`;
      return {
        id: pokemonId,
        name,
        imageURL,
        color: '',
      };
    },
  );
  return newPokemonsList;
};

export const apiToPokemonsList = (PokemonsList: IPokemonsList) => {
  const newPokemonsResponse: IPokemonsListData = {
    ...PokemonsList,
    results: transformPokemonsData(PokemonsList.results),
  };
  return newPokemonsResponse;
};
