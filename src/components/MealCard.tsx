import { format } from 'date-fns';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { MealDTO } from '../@types/dtos/MealDTO';
import { useTokens } from '@theme/ThemeContext';

export type MealCardProps = PressableProps & {
  item: MealDTO;
};

export function MealCard({ item, ...rest }: MealCardProps) {
  const { colors, fontFamily, fontSize } = useTokens();

  return (
    <Pressable
      {...rest}
      style={({ pressed }) => {
        return {
          opacity: pressed ? 0.4 : 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 14,
          gap: 12,
          borderWidth: 2,
          borderRadius: 6,
          borderColor: colors.gray5,
        };
      }}
    >
      <Text
        style={{
          fontSize: fontSize.bodyXS,
          fontFamily: fontFamily.bold,
          lineHeight: fontSize.bodyXS * 1.3,
          color: colors.gray1,
        }}
      >
        {format(item.date, 'HH:MM')}
      </Text>
      <View
        style={{
          height: 14,
          width: 1,
          backgroundColor: colors.gray4,
        }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: fontSize.bodyM,
          fontFamily: fontFamily.regular,
          lineHeight: fontSize.bodyM * 1.3,
          color: colors.gray2,
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          height: 14,
          width: 14,
          borderRadius: 7,
          backgroundColor: item.isInDiet ? colors.greenMid : colors.redMid,
        }}
      />
    </Pressable>
  );
}
