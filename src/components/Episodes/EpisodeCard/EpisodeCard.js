import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

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

const EpisodeCard = ({ episode: { id, image, title, openingCrawl } }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={classes.card}
      onClick={() => history.push(`episodes/${id}`)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {openingCrawl}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EpisodeCard;
