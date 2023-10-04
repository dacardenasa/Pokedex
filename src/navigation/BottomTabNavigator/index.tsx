/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator, StackPokemonNavigator } from '@navigation';
import { ListDashes, MagnifyingGlass } from 'phosphor-react-native';
import { StyleSheet } from 'react-native';

export type BottomTabParamsList = {
  List: undefined;
  search: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.tabContainer}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#5856D6',
      }}
    >
      <Tab.Screen
        name="List"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <ListDashes size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={StackPokemonNavigator}
        options={{
          tabBarLabel: 'Búsqueda',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MagnifyingGlass size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'white',
  },
  tabBar: {
    position: 'absolute',
    paddingBottom: 8,
    paddingTop: 8,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 0,
  },
});
