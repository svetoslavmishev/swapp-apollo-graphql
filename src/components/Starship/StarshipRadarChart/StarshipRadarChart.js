import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

import { ThemeContext } from '../../../themeContext';
import compareValues from '../../../helpers';
import styles from './StarshipRadarChartStyles';

const StarshipRadarChart = ({
  starship,
  starshipsByClass: {
    allStarships: { edges }
  }
}) => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  const data = [
    {
      data: {
        maxAtmosphericSpeed: compareValues(
          edges,
          starship.maxAtmosphericSpeed,
          'maxAtmosphericSpeed'
        ),
        cost: compareValues(edges, starship.cost, 'cost'),
        maxMLPerHour: compareValues(
          edges,
          starship.maxMLPerHour,
          'maxMLPerHour'
        ),
        crew: compareValues(edges, starship.crew, 'crew'),
        hyperdriveRating: compareValues(
          edges,
          starship.hyperdriveRating,
          'hyperdriveRating'
        )
      },
      meta: { color: '#4bd5ee' }
    }
  ];

  return (
    <div className="md:ml-20">
      <RadarChart
        options={{
          dots: true,
          dotProps: () => ({
            className: `dot ${classes.dots}`
          }),
          axes: false,
          scales: 5,
          scaleProps: () => ({
            className: 'axis',
            fill: 'none'
          }),
          zoomDistance: 1.3,
          captionProps: () => ({
            className: classes.customCaption
          })
        }}
        captions={{
          maxAtmosphericSpeed: 'Max Atm. Speed',
          maxMLPerHour: 'Max ML/h',
          hyperdriveRating: 'HyperD Rat.',
          crew: 'Crew',
          cost: 'Cost'
        }}
        data={data}
        size={350}
      />
    </div>
  );
};

StarshipRadarChart.propTypes = {
  starshipsByClass: PropTypes.object
};

export default StarshipRadarChart;
