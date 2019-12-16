import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GET_PROFILE } from '../../../queries/queries';

import { Header, CharCard, Loading, ItemCard } from '../../index';
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

  const {
    person: { name, image, height, mass, species, homeworld }
  } = data;

  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={`text-center text-3xl p-4 ${classes.title}`}>
          {name}
        </div>
        <div className="flex flex-wrap justify-center items-center p-4">
          <ItemCard
            name={name}
            image={image}
            height={height}
            mass={mass}
            species={species}
            homeworld={homeworld}
          />
          <div className="ml-10 mr-10">
            <div className={classes.shipsTitle}>Piloted starsShips</div>
            {data.person.starships.edges.length > 0 ? (
              data.person.starships.edges.map(ship => {
                return (
                  // TODO: add to share component
                  <CharCard
                    key={ship.node.id}
                    chars={ship.node}
                    onClick={() => history.push(`/starships/${ship.node.id}`)}
                  />
                );
              })
            ) : (
              <div className={`text-center ${classes.title}`}>
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
