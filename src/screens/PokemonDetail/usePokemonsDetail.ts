import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { PokemonService } from '@services';
import { PokemonDetail } from '@interfaces';

export const usePokemonsDetail = (pokemonId: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail>(
    {} as PokemonDetail,
  );

  const { isError, isFetching } = useQuery(
    ['pokemons-detail', pokemonId],
    PokemonService.fetchPokemonDetail,
    {
      onSuccess: (data: PokemonDetail) => {
        if (data) {
          setPokemonDetails(data);
        }
      },
    },
  );

  return {
    isFetching,
    isError,
    pokemonDetails,
  };
};
