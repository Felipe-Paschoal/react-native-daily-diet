import { useTokens } from '@theme/ThemeContext';
import { ActivityIndicator, View } from 'react-native';

export function LoadingScreen() {
  const { colors } = useTokens();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray2,
      }}
    >
      <ActivityIndicator size={48} color={colors.greenDark} />
    </View>
  );
}
