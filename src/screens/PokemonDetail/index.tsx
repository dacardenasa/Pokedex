import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Error, FadeInImage, Loader, PokemonDetails } from '@components';
import { PokemonDetailProps } from '@interfaces';

import { usePokemonsDetail } from './usePokemonsDetail';

const PokemonDetail = ({ route, navigation }: PokemonDetailProps) => {
  const {
    pokemon: { id, name, color, imageURL },
  } = route.params;
  const { top } = useSafeAreaInsets();

  const { isFetching, isError, pokemonDetails, refetch } =
    usePokemonsDetail(id);

  if (isError) {
    return (
      <Error
        handlerFn={refetch}
        buttonTitle={'Reintentar'}
        description={'Hubo un error obteniendo los detalles'}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          style={{ ...styles.backButton, top: top + 10 }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={40} color={'white'} />
        </TouchableOpacity>
        <Text style={{ ...styles.title, top: top + 45 }}>
          {name + '\n'}#{id}
        </Text>
        <Image
          style={styles.pokeball}
          source={require('@assets/pokebola-blanca.png')}
        />
        <FadeInImage uri={imageURL} style={styles.pokemonImage} />
      </View>
      {isFetching ? (
        <Loader
          color={color ?? 'green'}
          size={50}
          text={'Cargando detalles pokemon...'}
        />
      ) : (
        <PokemonDetails pokemon={pokemonDetails} />
      )}
    </View>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    position: 'relative',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    alignSelf: 'flex-start',
    left: 10,
    color: 'white',
    fontSize: 40,
  },
  text: {
    fontSize: 48,
    color: 'black',
    textAlign: 'center',
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicatorBox: {
    flex: 1,
  },
});
