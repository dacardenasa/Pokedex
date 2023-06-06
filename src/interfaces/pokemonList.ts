/* get all pokemons types */

export interface IPokemonSingle {
  name: string;
  url: string;
}

export interface IPokemonsList {
  count: number;
  next: string;
  previous: null;
  results: IPokemonSingle[];
}

export interface IPokemon {
  id: number;
  name: string;
  url: string;
  color?: string;
}

export interface IPokemonsListData {
  count: number;
  next: string;
  previous: null;
  results: IPokemon[];
}
