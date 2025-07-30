import { useNavigation } from '@react-navigation/native';
import { useTokens } from '@theme/ThemeContext';
import { ArrowLeftIcon } from 'phosphor-react-native';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tokens } from '@theme/Tokens';

type defaultContainerProps = {
  ArrowLeftColor: keyof typeof tokens.colors;
  HeaderTitle: string;
  HeaderSubtitle?: string;
  HeaderColor: keyof typeof tokens.colors;
};

export function DefaultContainer() {
  const { colors, fontFamily, fontSize } = useTokens();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray5 }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowLeftIcon
          size={24}
          color={colors.greenDark}
          style={{ marginLeft: 24, marginTop: 24 }}
        />
      </Pressable>
      <Text
        style={{
          fontSize: fontSize.titleG,
          fontFamily: fontFamily.bold,
          lineHeight: fontSize.titleG * 1.3,
          color: colors.gray1,
          alignSelf: 'center',
        }}
      >
        90,86%
      </Text>
      <Text
        style={{
          fontSize: fontSize.bodyS,
          fontFamily: fontFamily.regular,
          color: colors.gray2,
          alignSelf: 'center',
          marginBottom: 32,
        }}
      >
        das refeições dentro da dieta
      </Text>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.gray7,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 24,
          gap: 12,
        }}
      ></View>
    </SafeAreaView>
  );
}
