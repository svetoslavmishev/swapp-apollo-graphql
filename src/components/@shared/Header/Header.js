import React, { useContext } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import styles from './HeaderStyles';
import { ThemeContext } from '../../../themeContext';

const Header = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const client = useApolloClient();
  const classes = styles({ currentTheme });

  const handleLogout = () => {
    client.writeData({ data: { isAuthenticated: false } });
    localStorage.clear();
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolBar} onClick={toggleTheme}>
          SWAPP
        </div>
        <div className={classes.toolBarLeft}>
          <Link to={'/episodes'}>Episodes</Link>
          <Link to={'/characters'}>Characters</Link>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;