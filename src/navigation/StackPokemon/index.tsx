import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonDetail, PokemonSearch } from '@screens';
import { IPokemon } from '@interfaces';

type StackPokemonParamsList = {
  PokemonSearch: undefined;
  PokemonDetail: { pokemon: IPokemon };
};

const Stack = createStackNavigator<StackPokemonParamsList>();

export const StackPokemonNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="PokemonSearch" component={PokemonSearch} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
};
