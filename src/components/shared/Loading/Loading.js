import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { ThemeContext } from '../../../themeContext';
import { textAlign } from '@material-ui/system';
import styles from './LoadingStyles';

function Loading() {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  return (
    <div className="flex flex-1 justify-center items-center h-screen">
      <div className="w-1/3 sm:w-full md:w-1/3">
        <Typography>Loading...</Typography>
        <LinearProgress classes={{ root: classes.progress }} />
      </div>
    </div>
  );
}

export default Loading;
