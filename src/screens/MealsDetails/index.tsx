import { AppScreenProps } from '@routes/app.routes';
import { Text, View } from 'react-native';

export function MealsDetails({
  route,
  navigation,
}: AppScreenProps<'MealsDetails'>) {
  return (
    <View>
      <Text>MealsDetails</Text>
    </View>
  );
}
