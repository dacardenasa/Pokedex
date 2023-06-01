import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {StackParamsList} from '@navigation';

export type ScreensProps = StackNavigationProp<StackParamsList>;

export type HomeProps = StackScreenProps<StackParamsList, 'Home'>;
export type PokemonListProps = StackScreenProps<StackParamsList, 'PokemonList'>;
