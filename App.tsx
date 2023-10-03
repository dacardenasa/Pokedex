import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
