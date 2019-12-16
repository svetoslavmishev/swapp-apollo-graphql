import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core/styles';

import { ThemeContext, theme } from './themeContext';
import Routes from './routes/routes';
import { AUTH } from './queries/queries';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const { data } = useQuery(AUTH);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Routes isAuthenticated={data.isAuthenticated} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
