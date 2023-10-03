import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PokemonDetail } from '@screens';
import { IPokemon } from '@interfaces';

export type StackParamsList = {
  Home: undefined;
  PokemonDetail: { pokemon: IPokemon };
};

const Stack = createStackNavigator<StackParamsList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
};
