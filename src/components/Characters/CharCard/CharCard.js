import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, ButtonBase } from "@material-ui/core";

import { ThemeContext } from "../../../themeContext";
import styles from "./CharCardStyles";

const CharCard = ({ chars: { id, image, name }, onClick }) => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  return (
    <Paper className={`flex  ${classes.paper}`} onClick={onClick}>
      <div>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="hero" src={image} />
        </ButtonBase>
      </div>
      <div className="flex w-full items-center pl-4">
        <Typography className={classes.charTitle}>{name}</Typography>
      </div>
    </Paper>
  );
};

CharCard.propTypes = {
  chars: PropTypes.shapeOf({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
  }),
  onClick: PropTypes.func
};

export default CharCard;
