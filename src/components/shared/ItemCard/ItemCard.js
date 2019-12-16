import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../themeContext';
import styles from './ItemCardStyles';

const ItemCard = ({
  name,
  image,
  height,
  mass,
  species,
  homeworld,
  starshipClass,
  cost,
  crew,
  maxAtmosphericSpeed,
  hyperdriveRating
}) => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={`text-center ${classes.title}`}
          variant="h6"
          component="h6"
        >
          {name}
        </Typography>
        <CardMedia className={classes.media} image={image} title={name} />

        {/* Character data */}
        {height && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Height: </span>
            <span>{height}</span>
          </Typography>
        )}
        {mass && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Weight: </span>
            <span> {mass}</span>
          </Typography>
        )}
        {species && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Species: </span>
            <span>{species.name}</span>
          </Typography>
        )}
        {homeworld && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Home World: </span>
            <span>{homeworld.name}</span>
          </Typography>
        )}

        {/* Starship data */}
        {starshipClass && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Class: </span>
            <span>{starshipClass}</span>
          </Typography>
        )}
        {cost && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Cost: </span>
            <span>{cost} credits</span>
          </Typography>
        )}
        {crew && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Crew: </span>
            <span>{crew}</span>
          </Typography>
        )}
        {maxAtmosphericSpeed && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Max Atmospheric Speed: </span>
            <span>{maxAtmosphericSpeed}</span>
          </Typography>
        )}
        {hyperdriveRating && (
          <Typography
            className={classes.descriptionDetails}
            variant="body2"
            component="p"
          >
            <span>Hyperdrive Rating: </span>
            <span>{hyperdriveRating}</span>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.number,
  mass: PropTypes.number,
  species: PropTypes.shape({
    name: PropTypes.string
  }),
  homeworld: PropTypes.shape({
    name: PropTypes.string
  }),
  starshipClass: PropTypes.string,
  cost: PropTypes.number,
  crew: PropTypes.number,
  maxAtmosphericSpeed: PropTypes.number,
  hyperdriveRating: PropTypes.number
};

export default ItemCard;
