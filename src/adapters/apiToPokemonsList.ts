import {IPokemonSingle, IPokemonsList} from '@interfaces';

const transformPokemonsData = (pokemons: IPokemonSingle[]) => {
  return pokemons.map((pokemon: IPokemonSingle) => {
    return {
      id: pokemon.url.slice(34, pokemon.url.length - 1),
      name: pokemon.name,
      imageURL: pokemon.url,
      color: '',
    };
  });
};

export const apiToPokemonsList = (PokemonsList: IPokemonsList) => {
  return {
    ...PokemonsList,
    results: transformPokemonsData(PokemonsList.results),
  };
};
