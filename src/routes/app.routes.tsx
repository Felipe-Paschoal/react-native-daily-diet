import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Meals } from '@screens/Meals';
import { MealsDetails } from '@screens/MealsDetails';
import { CreateMeal } from '@screens/CreateMeal';
import { MealDTO } from '../@types/dtos/MealDTO';
import { GeneralStatistics } from '@screens/GeneralStatistics';

export type AppParamsList = {
  Meals: undefined;
  MealsDetails: MealDTO;
  CreateMeal: undefined;
  GeneralStatistics: undefined;
};

export type AppScreenProps<T extends keyof AppParamsList> =
  NativeStackScreenProps<AppParamsList, T>;

const { Navigator, Screen } = createNativeStackNavigator<AppParamsList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Meals" component={Meals} />
      <Screen name="MealsDetails" component={MealsDetails} />
      <Screen name="CreateMeal" component={CreateMeal} />
      <Screen name="GeneralStatistics" component={GeneralStatistics} />
    </Navigator>
  );
}
