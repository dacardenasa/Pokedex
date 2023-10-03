import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '@theme';
import { PokemonCard } from '@components';

import { usePokemonsList } from './usePokemonsList';

const Home = () => {
  const { isFetching, isError, pokemons, offSet, fetchMorePokemons } =
    usePokemonsList();
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Image
        source={require('@assets/pokebola.png')}
        style={globalStyles.pokebolaBg}
      />
      {isFetching ? <Text>Loading pokemons list....</Text> : null}
      <FlatList
        data={pokemons}
        contentContainerStyle={styles.pokemonListContainer}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item, index) => `${item}-${index}`}
        onEndReachedThreshold={0.5}
        onEndReached={() => (offSet > 0 ? fetchMorePokemons() : () => null)}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              top: top + 20,
              marginBottom: top + 40,
            }}
          >
            Pokedex
          </Text>
        }
        numColumns={2}
        ListFooterComponent={
          <ActivityIndicator
            style={styles.activitityIndicator}
            size={20}
            color={'gray'}
          />
        }
      />
      {isError ? (
        <Text>There was an error getting pokemons list....</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  activitityIndicator: {
    height: 100,
  },
  pokemonImg: {
    width: 100,
    height: 100,
  },
  pokemonListContainer: {
    alignItems: 'center',
  },
});

export default Home;
