import { createContext, ReactNode, useContext } from 'react';
import { tokens } from './Tokens';

const ThemeContext = createContext<typeof tokens | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ ...tokens }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTokens = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTokens deve ser utilizado somente dentro do ThemeProvider'
    );
  }

  return context;
};
