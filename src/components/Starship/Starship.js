import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {
  Container,
  Card,
  CardHeader,
  CardActionArea,
  CardMedia
} from '@material-ui/core';

import { GET_STARSHIP } from '../../queries/queries';
import { Header, Loading, ItemCard } from '../index';
import { ThemeContext } from '../../themeContext';
import styles from './StarshipStyles';

const Starship = () => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(GET_STARSHIP, {
    variables: { id: starshipId }
  });

  if (loading) return <Loading />;
  if (error) return null;
  const {
    starship: {
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
        <div className={`text-center text-3xl p-4`}>
          <div className={classes.title}>{name}</div>
          <div className={classes.subTitle}>({model})</div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <ItemCard
            name={name}
            image={image}
            starshipClass={starshipClass}
            cost={cost}
            crew={crew}
            maxAtmosphericSpeed={maxAtmosphericSpeed}
            hyperdriveRating={hyperdriveRating}
          />
          {/* TOODO: Add radar chart */}
          <div>
            <Card className={classes.card}>
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
