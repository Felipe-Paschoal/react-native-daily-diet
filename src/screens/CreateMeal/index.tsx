import { AppScreenProps } from '@routes/app.routes';
import { Text, View } from 'react-native';

export function CreateMeal({
  route,
  navigation,
}: AppScreenProps<'CreateMeal'>) {
  return (
    <View>
      <Text>CreateMeal</Text>
    </View>
  );
}
