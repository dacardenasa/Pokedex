import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface ILoaderProps {
  text: string;
  size: number;
  color: string;
}

const Loader = ({ text, size, color }: ILoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <View style={styles.separator} />
      <Text style={styles.description}>{text}</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    color: 'black',
  },
  separator: {
    height: 16,
  },
});
