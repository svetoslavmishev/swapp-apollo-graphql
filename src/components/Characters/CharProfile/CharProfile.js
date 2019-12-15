import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GET_PROFILE } from '../../../queries/queries';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

import { Header, CharCard } from '../../index';
import Loading from '../../shared/Loading/Loading';
import { ThemeContext } from '../../../themeContext';
import styles from './CharProfileStyles';

const CharProfile = () => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const { characterId } = useParams();
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: { id: characterId }
  });

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <>
      <Header />
      <div div className={classes.root}>
        <div className={`text-center text-3xl p-4 ${classes.title}`}>
          {data.person.name}
        </div>
        <div className="flex justify-center p-4">
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={`text-center ${classes.title}`}
                variant="h6"
                component="h6"
              >
                {data.person.name}
              </Typography>
              <CardMedia
                className={classes.media}
                image={data.person.image}
                title={data.person.name}
              />
              <Typography variant="body2" component="p">
                Height: {data.person.height}
              </Typography>
              <Typography variant="body2" component="p">
                Weight: {data.person.mass}
              </Typography>
              <Typography variant="body2" component="p">
                Species: {data.person.species.name}
              </Typography>
              <Typography variant="body2" component="p">
                Home World: {data.person.homeworld.name}
              </Typography>
            </CardContent>
          </Card>

          <div className="m-10">
            <div className={classes.shipsTitle}>Piloted starsShips</div>
            {data.person.starships.edges.length > 0 ? (
              data.person.starships.edges.map(ship => {
                return (
                  <CharCard
                    key={ship.node.id}
                    chars={ship.node}
                    onClick={() => history.push(`/starships/${ship.node.id}`)}
                  />
                );
              })
            ) : (
              <div className="text-center text-yellow-500">
                No starships found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharProfile;
