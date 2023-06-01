import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PokemonList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PokemonList</Text>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    color: 'black',
    textAlign: 'center',
  },
});
