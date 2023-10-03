import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { PokemonDetail } from '@interfaces';
import { FadeInImage } from 'components/atoms';

const PokemonDetails = ({ pokemon }: { pokemon: PokemonDetail }) => {
  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={styles.typesContainer}>
        <Text style={styles.title}>Types</Text>
        <View style={styles.rowBox}>
          {pokemon.types.map(({ type }) => (
            <Text key={type.name} style={styles.descriptionLabel}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.descriptionLabel}>{pokemon.weight}Kg</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.spriteBox}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.spriteBox}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.spriteBox}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.spriteBox}
        />
      </ScrollView>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades</Text>
        <View style={styles.rowBox}>
          {pokemon.abilities.map(({ ability }) => (
            <Text key={ability.name} style={styles.descriptionLabel}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pokemon.moves.map(({ move }) => (
            <Text key={move.name} style={styles.descriptionLabel}>
              {move.name}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={`${stat.stat.name}-${index}`} style={styles.rowBox}>
              <Text style={styles.statsLabel}>{stat.stat.name}</Text>
              <Text style={styles.statsDescription}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footerSprite}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.spriteBox}
        />
      </View>
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  typesContainer: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  descriptionLabel: {
    fontSize: 17,
    marginRight: 10,
  },
  statsLabel: {
    fontSize: 17,
    width: 150,
  },
  statsDescription: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  rowBox: {
    flexDirection: 'row',
  },
  separator: {
    height: 5,
  },
  spriteBox: {
    width: 100,
    height: 100,
  },
  footerSprite: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
});
