import React from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';

import { Error, Loader, PokemonCard } from '@components';
import { globalStyles } from '@theme';

import { usePokemonsSearch } from './usePokemonSearch';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PokemonSearch = () => {
  const {
    isFetching,
    isError,
    filteredPokemons,
    searchValue,
    onChangeText,
    refetch,
  } = usePokemonsSearch();

  const { top } = useSafeAreaInsets();

  if (isError) {
    return (
      <Error
        handlerFn={refetch}
        buttonTitle={'Reintentar'}
        description={'Hubo un error por favor intentelo de nuevo'}
      />
    );
  }

  if (isFetching) {
    return <Loader color={'green'} size={50} text={'Cargando datos...'} />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/pokebola.png')}
        style={globalStyles.pokebolaBg}
      />
      <View
        style={{
          ...styles.contentBox,
          top: Platform.OS === 'ios' ? top : top + 5,
        }}
      >
        <View style={styles.textFieldBox}>
          <TextInput
            style={styles.textField}
            onChangeText={onChangeText}
            value={searchValue}
            placeholder={'Buscar pokemon'}
            keyboardType={'default'}
          />
          <MagnifyingGlass size={24} style={styles.searchIcon} />
        </View>
        <View style={styles.separator} />
        <FlatList
          data={filteredPokemons}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          keyExtractor={(item, index) => `${item}-${index}`}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            searchValue.length > 0 && filteredPokemons.length ? (
              <Text>No hay resultados para {searchValue}</Text>
            ) : null
          }
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.headerTitle}>{searchValue}</Text>
          }
          ListFooterComponent={<View style={styles.separatorList} />}
        />
      </View>
    </View>
  );
};

export default PokemonSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  textFieldBox: {
    width: '100%',
    position: 'absolute',
    zIndex: 999,
    top: 8,
  },
  textField: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(221, 211, 211, 0.71)',
    color: 'black',
    borderRadius: 100,
    paddingHorizontal: 16,
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  separator: {
    height: 16,
  },
  separatorList: {
    height: 50,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 8,
    marginBottom: 8,
    marginTop: 48,
  },
});
