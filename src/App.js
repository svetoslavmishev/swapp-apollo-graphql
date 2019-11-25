import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core/styles';

import { ThemeContext, themes } from './themeContext';
import Routes from './routes/routes';
import { AUTH } from './client/queries';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const { data } = useQuery(AUTH);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={themes}>
        <Routes isAuthenticated={data.isAuthenticated} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
