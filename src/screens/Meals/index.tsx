import { AppScreenProps } from '@routes/app.routes';
import { Text, View } from 'react-native';

export function Meals({ route, navigation }: AppScreenProps<'Meals'>) {
  return (
    <View>
      <Text>Meals</Text>
    </View>
  );
}
