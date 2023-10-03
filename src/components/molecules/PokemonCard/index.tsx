import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import { FadeInImage } from '../../atoms';

import { HomeProps, IPokemon } from '@interfaces';
import { useImageColors } from '@hooks';
import { useNavigation } from '@react-navigation/native';

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const screenWidth = Dimensions.get('window').width;

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const navigation = useNavigation<HomeProps['navigation']>();
  const imageColors = useImageColors(pokemon.imageURL);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonDetail', {
          pokemon: { ...pokemon, color: imageColors?.background },
        })
      }
      activeOpacity={0.9}
    >
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: imageColors?.background,
        }}
      >
        <Text style={styles.pokemonName}>
          {pokemon.name}
          {'\n#' + pokemon.id}
        </Text>
        <Image
          style={styles.pokeball}
          source={require('@assets/pokebola-blanca.png')}
        />
        <FadeInImage uri={pokemon.imageURL} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'grey',
    marginHorizontal: 10,
    height: 120,
    width: screenWidth * 0.4,
    marginBottom: 10,
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  pokeball: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -5,
    right: -8,
  },
});
