import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme = defaultTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme: toggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
