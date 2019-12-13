import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    margin: 30,
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].Cards.backgroundColor,
    border: ({ currentTheme }) =>
      `1px solid ${theme.palette[currentTheme].Cards.borderColor}`
  },
  title: {
    fontFamily: 'StarWars',
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor,
    backgroundColor: ({ currentTheme }) =>
      theme.palette[currentTheme].Cards.backgroundColor
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}));

export default styles;
