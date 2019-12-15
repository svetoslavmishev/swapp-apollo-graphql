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
import { Header } from '../index';
import Loading from '../shared/Loading/Loading';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    margin: 30
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  title: {
    fontFamily: 'StarWars',
    '& div:last-child()': {
      fontSize: 14
    }
  }
}));

const Starship = () => {
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(GET_STARSHIP, {
    variables: { id: starshipId }
  });
  const classes = useStyles();

  if (loading) return <Loading />;
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
      <Header />
      <Container className={classes.root} maxWidth="xl">
        <div className={`text-center text-3xl p-4 ${classes.title}`}>
          <div>{name}</div>
          <div>({model})</div>
        </div>
        <div className="flex flex-wrap justify-center">
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
          <div>
            <Card className={classes.card} id={id}>
              <CardActionArea>
                <CardHeader title="Compared to Starships Class Max" />
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={name}
                />
              </CardActionArea>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Starship;
