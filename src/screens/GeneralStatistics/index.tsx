import { AppScreenProps } from '@routes/app.routes';
import { useTokens } from '@theme/ThemeContext';
import { ArrowLeftIcon } from 'phosphor-react-native';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function GeneralStatistics({
  route,
  navigation,
}: AppScreenProps<'GeneralStatistics'>) {
  const { colors, fontFamily, fontSize } = useTokens();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.greenLight }}>
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
      >
        <Text
          style={{
            fontSize: fontSize.titleXS,
            fontFamily: fontFamily.bold,
            color: colors.gray1,
            alignSelf: 'center',
            marginBottom: 24,
          }}
        >
          Estatísticas gerais
        </Text>
        <View
          style={{
            width: '100%',
            backgroundColor: colors.gray6,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            padding: 16,
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: fontSize.titleM,
              fontFamily: fontFamily.bold,
              lineHeight: fontSize.titleM * 1.3,
              color: colors.gray1,
            }}
          >
            22
          </Text>
          <Text
            style={{
              fontSize: fontSize.bodyS,
              fontFamily: fontFamily.regular,
              color: colors.gray2,
            }}
          >
            melhor sequência de pratos dentro da dieta
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: colors.gray6,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            padding: 16,
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: fontSize.titleM,
              fontFamily: fontFamily.bold,
              lineHeight: fontSize.titleM * 1.3,
              color: colors.gray1,
            }}
          >
            109
          </Text>
          <Text
            style={{
              fontSize: fontSize.bodyS,
              fontFamily: fontFamily.regular,
              color: colors.gray2,
            }}
          >
            refeições registradas
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View
            style={{
              width: '49%',
              backgroundColor: colors.greenLight,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              padding: 16,
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: fontSize.titleM,
                fontFamily: fontFamily.bold,
                lineHeight: fontSize.titleM * 1.3,
                color: colors.gray1,
              }}
            >
              99
            </Text>
            <Text
              style={{
                fontSize: fontSize.bodyS,
                fontFamily: fontFamily.regular,
                color: colors.gray2,
                textAlign: 'center',
              }}
            >
              refeições dentro da {'\n'}dieta
            </Text>
          </View>
          <View
            style={{
              width: '49%',
              backgroundColor: colors.redLight,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              padding: 16,
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: fontSize.titleM,
                fontFamily: fontFamily.bold,
                lineHeight: fontSize.titleM * 1.3,
                color: colors.gray1,
              }}
            >
              10
            </Text>
            <Text
              style={{
                fontSize: fontSize.bodyS,
                fontFamily: fontFamily.regular,
                color: colors.gray2,
                textAlign: 'center',
              }}
            >
              refeições fora da {'\n'}dieta
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
