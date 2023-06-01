import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TestScreen} from '@screens';

const App = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>Pokedex</Text>
      <TestScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wbhite',
  },
  text: {
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});
