import { AppScreenProps } from '@routes/app.routes';
import { Image, Pressable, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowUpRightIcon,
  PencilSimpleLineIcon,
  PlusIcon,
  UserIcon,
} from 'phosphor-react-native';
import Logo from '@assets/Logo.png';
import { useTokens } from '@theme/ThemeContext';
import { Button } from '@components/Button';
import { MealSection } from '../../@types/structures/MealSection';
import { format } from 'date-fns';
import { MealCard } from '@components/MealCard';

// dados gerados por IA com baso no MealSection
export const MEAL_SECTIONS_EXAMPLE: MealSection[] = [
  {
    title: new Date('2025-07-13'),
    data: [
      {
        id: '1',
        name: 'Ovos mexidos',
        description: 'Ovos mexidos com pão integral e uma xícara de café preto',
        date: new Date('2025-07-13T08:00:00'),
        isInDiet: true,
      },
      {
        id: '2',
        name: 'Frango grelhado',
        description:
          'Peito de frango grelhado com salada de alface, tomate e arroz integral',
        date: new Date('2025-07-13T12:30:00'),
        isInDiet: true,
      },
      {
        id: '3',
        name: 'Bolo de chocolate',
        description:
          'Fatia generosa de bolo de chocolate com cobertura de brigadeiro',
        date: new Date('2025-07-13T16:00:00'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-12'),
    data: [
      {
        id: '4',
        name: 'Sopa de legumes',
        description:
          'Sopa leve com cenoura, abobrinha, batata e caldo de frango natural',
        date: new Date('2025-07-12T20:00:00'),
        isInDiet: true,
      },
      {
        id: '5',
        name: 'Sanduíche',
        description:
          'Sanduíche de pão integral com atum e salada de alface e tomate',
        date: new Date('2025-07-12T10:00:00'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-01'),
    data: [
      {
        id: '0d84e495-fc46-4d1e-893c-c846df29aa8c',
        name: 'Tapioca',
        description: 'Tapioca recheada com frango desfiado e queijo',
        date: new Date('2025-07-01'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-02'),
    data: [
      {
        id: 'f603c68d-8a9b-4df8-b0e5-ba951241a438',
        name: 'Salada',
        description: 'Salada verde com grão-de-bico, pepino e azeite',
        date: new Date('2025-07-02'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-03'),
    data: [
      {
        id: '2b1d33e1-0977-4b8e-9363-36054e0c4399',
        name: 'Feijoada',
        description: 'Feijoada completa com arroz, couve e laranja',
        date: new Date('2025-07-03'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-04'),
    data: [
      {
        id: '15709301-25ab-4da7-ae82-b27b6a1bfc4a',
        name: 'Risoto',
        description: 'Risoto de cogumelos com queijo parmesão',
        date: new Date('2025-07-04'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-05'),
    data: [
      {
        id: '843676c9-c5ad-483f-9231-7ba26c2526c4',
        name: 'Ovos mexidos',
        description: 'Ovos mexidos com cebolinha e torradas integrais',
        date: new Date('2025-07-05'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-06'),
    data: [
      {
        id: 'fe8931ec-657e-409d-8469-e101ae616d18',
        name: 'Salada',
        description: 'Salada verde com grão-de-bico, pepino e azeite',
        date: new Date('2025-07-06'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-07'),
    data: [
      {
        id: '0b63f82b-64e1-4a87-8bc9-175b34eac9f1',
        name: 'Salmão',
        description: 'Salmão grelhado com purê de batata doce',
        date: new Date('2025-07-07'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-08'),
    data: [
      {
        id: 'a0b2b354-e0a3-4f67-95a0-398440562d3e',
        name: 'Bife acebolado',
        description: 'Bife acebolado com arroz, feijão e farofa',
        date: new Date('2025-07-08'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-09'),
    data: [
      {
        id: '8bf22c20-3557-4a5d-9883-a97152f78eff',
        name: 'Frango grelhado',
        description: 'Frango grelhado com legumes e arroz integral',
        date: new Date('2025-07-09'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-10'),
    data: [
      {
        id: '02556224-5eb4-4f02-add0-81fb255f2b79',
        name: 'Panqueca de aveia',
        description: 'Panqueca de aveia com banana e mel',
        date: new Date('2025-07-10'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-11'),
    data: [
      {
        id: 'f6e85d1e-f5be-481d-b31a-8f4b0d73ed46',
        name: 'Iogurte com granola',
        description: 'Iogurte natural com granola e frutas vermelhas',
        date: new Date('2025-07-11'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-12'),
    data: [
      {
        id: '5811f42d-d9be-420a-9e7b-1f179ea0aa23',
        name: 'Salada',
        description: 'Salada verde com grão-de-bico, pepino e azeite',
        date: new Date('2025-07-12'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-13'),
    data: [
      {
        id: '60b05a27-fd47-427a-ad1b-62842de4c58f',
        name: 'Panqueca de aveia',
        description: 'Panqueca de aveia com banana e mel',
        date: new Date('2025-07-13'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-14'),
    data: [
      {
        id: '350a7741-93d3-45dd-8b5f-c3f0ec3b2096',
        name: 'Bife acebolado',
        description: 'Bife acebolado com arroz, feijão e farofa',
        date: new Date('2025-07-14'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-15'),
    data: [
      {
        id: 'a9964ba9-9134-4b2a-ae12-dd0e94372d90',
        name: 'Feijoada',
        description: 'Feijoada completa com arroz, couve e laranja',
        date: new Date('2025-07-15'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-16'),
    data: [
      {
        id: '611a7d02-4076-4a8e-bd52-ba07eb25e87b',
        name: 'Hambúrguer',
        description: 'Hambúrguer caseiro com pão integral e salada',
        date: new Date('2025-07-16'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-17'),
    data: [
      {
        id: '1fdf94bc-cd98-4adb-897b-5b5e20096b5e',
        name: 'Risoto',
        description: 'Risoto de cogumelos com queijo parmesão',
        date: new Date('2025-07-17'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-18'),
    data: [
      {
        id: '20324787-99e3-4d48-ad65-3047e7ba116e',
        name: 'Panqueca de aveia',
        description: 'Panqueca de aveia com banana e mel',
        date: new Date('2025-07-18'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-19'),
    data: [
      {
        id: 'e0f652c6-b87d-49a0-b29e-1b1cf25f4b5f',
        name: 'Risoto',
        description: 'Risoto de cogumelos com queijo parmesão',
        date: new Date('2025-07-19'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-20'),
    data: [
      {
        id: '8d5baca8-b7b0-43ac-a83c-1288525d89fa',
        name: 'Panqueca de aveia',
        description: 'Panqueca de aveia com banana e mel',
        date: new Date('2025-07-20'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-21'),
    data: [
      {
        id: '50dde587-c469-42f2-9745-5b89a75a3c10',
        name: 'Frango grelhado',
        description: 'Frango grelhado com legumes e arroz integral',
        date: new Date('2025-07-21'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-22'),
    data: [
      {
        id: '3f54cbc5-3477-4d82-b025-ee2955b52866',
        name: 'Lasanha',
        description: 'Lasanha de berinjela com molho de tomate caseiro',
        date: new Date('2025-07-22'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-23'),
    data: [
      {
        id: '50660b5d-ef2d-4603-8d64-796e0fcc83f3',
        name: 'Bife acebolado',
        description: 'Bife acebolado com arroz, feijão e farofa',
        date: new Date('2025-07-23'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-24'),
    data: [
      {
        id: 'e2024f8f-aa3e-47c6-8876-59ac9503a111',
        name: 'Hambúrguer',
        description: 'Hambúrguer caseiro com pão integral e salada',
        date: new Date('2025-07-24'),
        isInDiet: true,
      },
    ],
  },
  {
    title: new Date('2025-07-25'),
    data: [
      {
        id: '6cf26674-8953-465c-8c37-74a73528c355',
        name: 'Hambúrguer',
        description: 'Hambúrguer caseiro com pão integral e salada',
        date: new Date('2025-07-25'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-26'),
    data: [
      {
        id: 'ed718078-a764-44eb-a9fd-02eb8b83c402',
        name: 'Risoto',
        description: 'Risoto de cogumelos com queijo parmesão',
        date: new Date('2025-07-26'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-27'),
    data: [
      {
        id: 'fa71fc0a-3def-432d-b920-d835965f5793',
        name: 'Salada',
        description: 'Salada verde com grão-de-bico, pepino e azeite',
        date: new Date('2025-07-27'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-28'),
    data: [
      {
        id: '3ae4f4a6-5d7c-4e79-a87d-fcd4782fa5d6',
        name: 'Hambúrguer',
        description: 'Hambúrguer caseiro com pão integral e salada',
        date: new Date('2025-07-28'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-29'),
    data: [
      {
        id: '5db8e0e8-b974-47ef-90c1-2dce81443a66',
        name: 'Ovos mexidos',
        description: 'Ovos mexidos com cebolinha e torradas integrais',
        date: new Date('2025-07-29'),
        isInDiet: false,
      },
    ],
  },
  {
    title: new Date('2025-07-30'),
    data: [
      {
        id: 'b1e2c8fc-bcb3-4253-8b34-cd7f411300eb',
        name: 'Panqueca de aveia',
        description: 'Panqueca de aveia com banana e mel',
        date: new Date('2025-07-30'),
        isInDiet: true,
      },
    ],
  },
];

export function Meals({ route, navigation }: AppScreenProps<'Meals'>) {
  const { colors, fontFamily, fontSize } = useTokens();

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image source={Logo} />
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.gray5,
            borderWidth: 2,
            borderColor: colors.gray2,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UserIcon color={colors.gray3} size={24} />
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('GeneralStatistics')}
        style={({ pressed }) => {
          return {
            marginTop: 32,
            opacity: pressed ? 0.4 : 1,
            paddingVertical: 20,
            paddingHorizontal: 16,
            width: '100%',
            backgroundColor: colors.greenLight,
            borderRadius: 8,
            alignItems: 'center',
            gap: 2,
          };
        }}
      >
        <ArrowUpRightIcon
          size={24}
          color={colors.greenDark}
          style={{ position: 'absolute', top: 8, right: 8 }}
        />
        <Text
          style={{
            fontSize: fontSize.titleG,
            fontFamily: fontFamily.bold,
            lineHeight: fontSize.titleG * 1.3,
            color: colors.gray1,
          }}
        >
          90,86%
        </Text>
        <Text
          style={{
            fontSize: fontSize.bodyS,
            fontFamily: fontFamily.regular,
            color: colors.gray2,
          }}
        >
          das refeições dentro da dieta
        </Text>
      </Pressable>

      <Text
        style={{
          marginTop: 40,
          marginBottom: 8,
          fontSize: fontSize.bodyM,
          fontFamily: fontFamily.bold,
          lineHeight: fontSize.bodyM * 1.3,
          color: colors.gray1,
        }}
      >
        Refeições
      </Text>
      <Button
        onPress={() => navigation.navigate('CreateMeal')}
        variant="solid"
        Icon={PlusIcon}
        title="Nova refeição"
      />

      <SectionList
        style={{ marginTop: 32 }}
        showsVerticalScrollIndicator={false}
        sections={MEAL_SECTIONS_EXAMPLE}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <MealCard
            onPress={() => {
              navigation.navigate('MealsDetails', item);
            }}
            item={item}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: fontSize.titleS,
              lineHeight: fontSize.titleS * 1.3,
              fontFamily: fontFamily.bold,
              color: colors.gray1,
            }}
          >
            {format(section.title, 'dd.MM.yy')}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
