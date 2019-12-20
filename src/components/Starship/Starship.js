import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Container } from '@material-ui/core';

import { GET_STARSHIP, GET_STARSHIPS_BY_CLASS } from '../../queries/queries';
import { Header, Loading, ItemCard, StarshipRadarChart } from '../index';
import { ThemeContext } from '../../themeContext';
import styles from './StarshipStyles';

const Starship = () => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(GET_STARSHIP, {
    variables: { id: starshipId }
  });

  const {
    data: starshipsByClass,
    loading: starshipsByClassLoading,
    error: starshipsByClasserror
  } = useQuery(GET_STARSHIPS_BY_CLASS, {
    variables: {
      starshipClass: data && data.starship && data.starship.starshipClass
    }
  });

  if (loading) return <Loading />;
  if (starshipsByClassLoading) return <Loading />;
  if (error) return null;
  if (starshipsByClasserror) return null;

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

          <StarshipRadarChart
            starshipsByClass={starshipsByClass}
            starship={data.starship}
          />
        </div>
      </Container>
    </>
  );
};

export default Starship;
