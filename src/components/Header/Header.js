import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography
} from "@material-ui/core";
import styles from "./HeaderStyles";
import { ThemeContext } from "../../themeContext";

const Header = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.toolBar}
            color="inherit"
            aria-label="menu"
          >
            SWAPP
          </IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%"
            }}
          >
            <Typography>Episodes</Typography>
            <Typography>Characters</Typography>
            <Button color="inherit">Login</Button>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch onChange={toggleTheme} aria-label="switch theme" />
                }
                label={currentTheme === "light" ? "Light" : "Dark"}
              />
            </FormGroup>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
