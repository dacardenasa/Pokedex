import {HomeProps} from '@interfaces';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokedex Home</Text>
      <Button
        title={'ir al pokelistado'}
        onPress={() => navigation.navigate('PokemonList')}
      />
    </View>
  );
};

export default Home;

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
