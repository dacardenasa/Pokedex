import { useEffect, useRef, useState } from 'react';
import { getColors } from 'react-native-image-colors';

export const useImageColors = (imageUrl: string) => {
  const [imageColors, setImageColors] = useState<{
    background: string;
  }>({ background: '#808080' });
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    getColors(imageUrl, {
      fallback: '#808080',
      cache: true,
      key: imageUrl,
    }).then(colors => {
      if (!isMounted.current) {
        return;
      }
      if (colors.platform === 'android') {
        setImageColors({
          background: colors.dominant,
        });
      }
      if (colors.platform === 'ios') {
        setImageColors({
          background: colors.background,
        });
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [imageUrl]);

  return imageColors;
};
