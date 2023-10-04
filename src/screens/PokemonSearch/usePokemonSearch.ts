import { useCallback, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { PokemonService } from '@services';
import { POKEMON_MAX_LIMIT_ITEMS } from '@constants';
import { useFocusEffect } from '@react-navigation/native';
import { useDebounce } from '@hooks';
import { IPokemon } from '@interfaces';

export const usePokemonsSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);

  const {
    data: pokemons,
    isError,
    isFetching,
    refetch,
  } = useQuery(
    ['pokemons-list', POKEMON_MAX_LIMIT_ITEMS, 0],
    PokemonService.fetchAllPokemons,
    {
      enabled: false,
    },
  );

  const onChangeText = (value: string) => {
    if (value.length === 0) {
      setFilteredPokemons([]);
    }
    setSearchValue(value);
  };

  const handleSearchPokemons = useCallback(() => {
    if (
      (pokemons?.results && !pokemons?.results.length) ||
      !searchValue.length
    ) {
      return;
    }
    const filteredData = pokemons?.results.filter(
      pokemon =>
        pokemon.name.includes(searchValue.toLowerCase()) ||
        pokemon.id.startsWith(searchValue.toLowerCase()),
    );
    if (filteredData) {
      setFilteredPokemons(filteredData);
    }
  }, [pokemons?.results, searchValue]);

  useDebounce({
    handlerFn: handleSearchPokemons,
    delay: 500,
    value: searchValue,
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return {
    isFetching,
    isError,
    filteredPokemons,
    searchValue,
    onChangeText,
    refetch,
  };
};
