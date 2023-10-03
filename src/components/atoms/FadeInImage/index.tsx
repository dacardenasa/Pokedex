import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageErrorEventData,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';

import { useAnimation } from '@hooks';
import { FadeInImageProps } from '@interfaces';

const FadeInImage = ({ uri, style = {} }: FadeInImageProps) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (_: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}
    >
      {isLoading && (
        <ActivityIndicator style={styles.activityBox} color="grey" size={30} />
      )}

      <Animated.Image
        source={{ uri }}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityBox: {
    position: 'absolute',
  },
});
