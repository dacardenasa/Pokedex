import React from 'react';
import {Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {globalStyles} from '@theme';

const Home = () => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('@assets/pokebola.png')}
        style={globalStyles.pokebolaBg}
      />
      <Text
        style={{
          ...globalStyles.title,
          ...globalStyles.globalMargin,
          top: top + 20,
        }}>
        Pokedex Home
      </Text>
    </>
  );
};

export default Home;
