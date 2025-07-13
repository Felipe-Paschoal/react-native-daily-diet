import { NavigationContainer } from '@react-navigation/native';
import { useTokens } from '@theme/ThemeContext';
import { View } from 'react-native';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { colors } = useTokens();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray7 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
