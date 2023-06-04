import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, PokemonList} from '@screens';

export type StackParamsList = {
  Home: undefined;
  PokemonList: undefined;
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
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokemonList" component={PokemonList} />
    </Stack.Navigator>
  );
};
