import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '@theme';
import { Error, Loader, PokemonCard } from '@components';

import { usePokemonsList } from './usePokemonsList';

const Home = () => {
  const { isFetching, isError, pokemons, offSet, fetchMorePokemons } =
    usePokemonsList();
  const { top } = useSafeAreaInsets();

  if (isFetching && !offSet) {
    return <Loader color={'green'} size={50} text={'Cargando pokemons...'} />;
  }

  if (isError) {
    return (
      <Error
        handlerFn={fetchMorePokemons}
        buttonTitle={'Reintentar'}
        description={'Hubo un error obteniendo los pokemon'}
      />
    );
  }

  return (
    <View>
      <Image
        source={require('@assets/pokebola.png')}
        style={globalStyles.pokebolaBg}
      />
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
    </View>
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
