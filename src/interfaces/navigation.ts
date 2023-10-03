import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { StackParamsList } from '@navigation';

export type ScreensProps = StackNavigationProp<StackParamsList>;

export type HomeProps = StackScreenProps<StackParamsList, 'Home'>;
export type PokemonDetailProps = StackScreenProps<
  StackParamsList,
  'PokemonDetail'
>;
