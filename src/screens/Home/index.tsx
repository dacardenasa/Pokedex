import React from 'react';
import {Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {globalStyles} from '@theme';
import {usePokemonsList} from '@hooks';

const Home = () => {
  const {isLoading, isFetching, isError} = usePokemonsList();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <Image
        source={require('@assets/pokebola.png')}
        style={globalStyles.pokebolaBg}
      />
      {isLoading || isFetching ? <Text>Loading pokemons list....</Text> : null}
      <Text
        style={{
          ...globalStyles.title,
          ...globalStyles.globalMargin,
          top: top + 20,
        }}>
        Pokedex Home
      </Text>
      {isError ? (
        <Text>There was an error getting pokemons list....</Text>
      ) : null}
    </>
  );
};

export default Home;
