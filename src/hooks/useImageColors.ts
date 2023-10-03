import { useEffect, useRef, useState } from 'react';
import { getColors } from 'react-native-image-colors';

export const useImageColors = (imageUrl: string) => {
  const [imageColors, setImageColors] = useState<{
    background: string;
    primary: string;
    secondary: string;
    detail: string;
  } | null>(null);
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    getColors(imageUrl, {
      fallback: 'grey',
      cache: true,
      key: imageUrl,
    }).then(colors => {
      if (!isMounted.current) {
        return;
      }
      if (colors.platform === 'android') {
        setImageColors({
          background: colors.dominant,
          primary: colors.average,
          secondary: colors.vibrant,
          detail: colors.darkVibrant,
        });
      }
      if (colors.platform === 'ios') {
        setImageColors({
          background: colors.background,
          primary: colors.primary,
          secondary: colors.secondary,
          detail: colors.detail,
        });
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [imageUrl]);

  return imageColors;
};
