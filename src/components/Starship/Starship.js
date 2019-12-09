import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Card,
  CardHeader,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { GET_STARSHIP } from '../../queries/queries';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    margin: 30
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
}));

const Starship = () => {
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(GET_STARSHIP, {
    variables: { id: starshipId }
  });
  const classes = useStyles();

  if (loading) return <div>Loading...</div>;
  if (error) return null;
  const {
    starship: {
      id,
      name,
      model,
      image,
      starshipClass,
      cost,
      crew,
      maxAtmosphericSpeed,
      hyperdriveRating
    }
  } = data;

  return (
    <>
      <Container className={classes.root} maxWidth="xl">
        <div className="flex justify-center bg-green-400">
          <div>{name}</div>
          <div>{model}</div>
        </div>
        <Card className={classes.card} id={id}>
          <CardActionArea>
            <CardHeader title={name} />
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent>
              <Typography variant="body2" component="p">
                Class: {starshipClass}
              </Typography>
              <Typography variant="body2" component="p">
                Cost: {cost} credits
              </Typography>
              <Typography variant="body2" component="p">
                Crew: {crew}
              </Typography>
              <Typography variant="body2" component="p">
                Max Atmospheric Speed: {maxAtmosphericSpeed}
              </Typography>
              <Typography variant="body2" component="p">
                Hyperdrive Rating: {hyperdriveRating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
};

export default Starship;
