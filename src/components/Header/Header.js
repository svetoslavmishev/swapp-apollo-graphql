import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import styles from './HeaderStyles';
import { ThemeContext } from '../../themeContext';

const Header = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.toolBar} onClick={toggleTheme}>
            SWAPP
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%'
            }}
            className={classes.toolBarLeft}
          >
            <Typography>Episodes</Typography>
            <Typography>Characters</Typography>
            <Button color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
