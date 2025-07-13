import { AppScreenProps } from '@routes/app.routes';
import { Text, View } from 'react-native';

export function GeneralStatistics({
  route,
  navigation,
}: AppScreenProps<'GeneralStatistics'>) {
  return (
    <View>
      <Text>GeneralStatistics</Text>
    </View>
  );
}
