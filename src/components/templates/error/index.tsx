import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IErrorProps {
  description: string;
  handlerFn: () => void;
  buttonTitle: string;
}

const Error = ({ description, buttonTitle, handlerFn }: IErrorProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('@assets/error.png')} style={styles.image} />
      <View style={styles.separator} />
      <Text>{description}</Text>
      <View style={styles.separator} />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlerFn}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  separator: {
    height: 16,
  },
  image: {
    width: 250,
    height: 250,
  },
  button: {
    width: 300,
    height: 45,
    borderRadius: 4,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
