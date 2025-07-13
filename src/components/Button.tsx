import { useTokens } from '@theme/ThemeContext';
import { Pressable, PressableProps, Text } from 'react-native';
import { Icon } from 'phosphor-react-native';
type ButtonProps = PressableProps & {
  variant?: 'solid' | 'outline';
  Icon?: Icon;
  title?: string;
};

export function Button({
  variant = 'solid',
  Icon,
  title,
  style,
  ...rest
}: ButtonProps) {
  const { colors, fontSize, fontFamily } = useTokens();

  const backgroundColor = variant === 'solid' ? colors.gray2 : 'transparent';
  const activeBackgroundColor =
    variant === 'solid' ? colors.gray1 : colors.gray5;
  const iconColor = variant === 'solid' ? colors.white : colors.gray1;
  const titleColor = variant === 'solid' ? colors.white : colors.gray1;

  return (
    <Pressable
      {...rest}
      style={({ pressed }) => {
        return {
          ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
          backgroundColor: pressed ? activeBackgroundColor : backgroundColor,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderWidth: 1,
          borderColor:
            pressed && variant === 'solid' ? colors.gray2 : colors.gray1,
          borderRadius: 6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        };
      }}
    >
      {Icon && <Icon size={18} color={iconColor} />}
      {title && (
        <Text
          style={{
            fontSize: fontSize.bodyS,
            fontFamily: fontFamily.bold,
            lineHeight: fontSize.bodyS * 1.3,
            color: titleColor,
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
