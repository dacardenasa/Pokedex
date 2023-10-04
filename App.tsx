import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomTabNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <BottomTabNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
