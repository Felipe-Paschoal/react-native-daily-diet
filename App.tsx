import { LoadingScreen } from '@components/Loading';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans';
import { Routes } from '@routes/index';
import { ThemeProvider } from '@theme/ThemeContext';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <LoadingScreen />}
    </ThemeProvider>
  );
}
