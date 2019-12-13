import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  button: {
    fontFamily: 'StarWars',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].SolidButtons.backgroundColor,
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].SolidButtons.fontColor,
    margin: 40,
    '&:hover': {
      color: '#000000',
      background: theme.palette.commonColors.yellow
    }
  }
}));

export default styles;
