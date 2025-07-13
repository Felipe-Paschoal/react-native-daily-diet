import { Meals } from '@screens/Meals';
import { ThemeProvider } from '@theme/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Meals />
    </ThemeProvider>
  );
}
