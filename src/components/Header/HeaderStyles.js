import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(theme => ({
  appBar: ({ currentTheme }) => theme.palette[currentTheme].AppBar,
  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "&:p": {
      margin: "0 12px"
    }
  }
}));

export default styles;
