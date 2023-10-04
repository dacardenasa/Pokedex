import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomTabNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <BottomTabNavigator />
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
