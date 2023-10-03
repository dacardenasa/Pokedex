import { useCallback, useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { PokemonService } from '@services';
import { POKEMON_LIMIT_ITEMS } from '@constants';
import { IPokemon, IPokemonsListData } from '@interfaces';
import { useFocusEffect } from '@react-navigation/native';

export const usePokemonsList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offSet, setOffset] = useState<number>(0);
  const nextPage = useRef<string | null>(null);

  const {
    isError,
    isFetching,
    refetch: fetchMorePokemons,
  } = useQuery(
    ['pokemons-list', POKEMON_LIMIT_ITEMS, offSet],
    PokemonService.fetchAllPokemons,
    {
      enabled: false,
      onSuccess: (data: IPokemonsListData) => {
        if (data) {
          setPokemons([...pokemons, ...data.results]);
          if (data.next) {
            nextPage.current = data.next;
            setOffset(c => c + POKEMON_LIMIT_ITEMS);
          } else {
            nextPage.current = null;
            setOffset(0);
          }
        }
      },
    },
  );

  useFocusEffect(
    useCallback(() => {
      fetchMorePokemons();
    }, [fetchMorePokemons]),
  );

  return {
    isFetching,
    isError,
    pokemons,
    offSet,
    fetchMorePokemons,
  };
};
