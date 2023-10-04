import { useEffect } from 'react';

interface IDebounceArgs {
  handlerFn: () => void;
  delay: number;
  value: string;
}

export const useDebounce = ({ handlerFn, delay, value }: IDebounceArgs) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      handlerFn();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, handlerFn, value]);
};
