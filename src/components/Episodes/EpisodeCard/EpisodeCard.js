import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";

import { ThemeContext } from "../../../themeContext";
import styles from "./EpisodesCardStyles";

const EpisodeCard = ({ episode: { id, image, title, openingCrawl } }) => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const history = useHistory();

  return (
    <Card
      className={classes.card}
      onClick={() => history.push(`episodes/${id}`)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography classes={{ root: classes.title }} variant="h6">
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

EpisodeCard.propTypes = {
  episode: PropTypes.shapeOf({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    openingCrawl: PropTypes.string
  })
};

export default EpisodeCard;
