import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GET_PROFILE } from '../../../queries/queries';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Header } from '../../index';

const useStyles = makeStyles({
  card: {
    minWidth: 200,
    maxWidth: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  media: {
    height: 0,
    paddingTop: '75%'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CharProfile = () => {
  const classes = useStyles();
  const { characterId } = useParams();
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: { id: characterId }
  });
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return null;
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
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
        {data.person.starships.edges.map(ship => {
          return (
            <Card
              key={ship.node.id}
              onClick={() => history.push(`/starships/${ship.node.id}`)}
            >
              <CardContent
                style={{
                  display: 'flex',
                  maxWidth: 200,
                  borderRadius: 10,
                  alignItems: 'center',
                  margin: 6,
                  border: '1px solid red'
                }}
              >
                <CardMedia
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10
                  }}
                  image={ship.node.image}
                  title={ship.node.name}
                />
                <Typography variant="body2" component="p">
                  {ship.node.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default CharProfile;
