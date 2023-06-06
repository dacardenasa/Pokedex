import {useQuery} from '@tanstack/react-query';
import {PokemonService} from '@services';
import {POKEMON_LIMIT_ITEMS} from '@constants';
import {useRef, useState} from 'react';
import {IPokemon, IPokemonsListData} from '@interfaces';

export const usePokemonsList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | null>(null);
  const nextPage = useRef<string | null>(null);

  const {isLoading, isError, isFetching} = useQuery(
    ['pokemons-lIst', POKEMON_LIMIT_ITEMS],
    PokemonService.fetchAllPokemons,
    {
      onSuccess: (data: IPokemonsListData) => {
        if (data) {
          setPokemons(data.results);
          nextPage.current = data.next;
        }
      },
    },
  );
  console.info('pokemons: ', pokemons);

  return {
    isLoading,
    isFetching,
    isError,
    pokemons,
  };
};
