import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  card: {
    minWidth: 180,
    maxWidth: 260,
    margin: 10,
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].Cards.backgroundColor,
    color: ({ currentTheme }) => theme.palette[currentTheme].Cards.fontColor,
    border: ({ currentTheme }) =>
      `1px solid ${theme.palette[currentTheme].Cards.borderColor}`
  },
  title: {
    fontFamily: 'StarWars',
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor
  },
  media: {
    height: 0,
    paddingTop: '75%'
  },
  shipsTitle: {
    fontFamily: 'StarWars',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor,
    borderBottom: ({ currentTheme }) =>
      `1px solid ${theme.palette[currentTheme].Cards.borderColor}`
  }
}));

export default styles;
