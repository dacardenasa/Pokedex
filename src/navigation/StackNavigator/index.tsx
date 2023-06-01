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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
