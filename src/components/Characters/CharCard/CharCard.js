import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, ButtonBase } from '@material-ui/core';

import { ThemeContext } from '../../../themeContext';
import styles from './CharCardStyles';

const CharCard = ({ chars: { id, image, name } }) => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const history = useHistory();

  return (
    <Paper
      className={`flex ${classes.paper}`}
      onClick={() => history.push(`/characters/${id}`)}
    >
      <div>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="hero" src={image} />
        </ButtonBase>
      </div>
      <div className="w-full flex justify-center items-center">
        <Typography className={classes.charTitle}>{name}</Typography>
      </div>
    </Paper>
  );
};

CharCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string
};

export default CharCard;
