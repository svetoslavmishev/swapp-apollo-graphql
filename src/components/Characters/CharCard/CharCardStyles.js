import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  paper: {
    width: 400,
    height: 90,
    margin: '.2rem',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].Cards.backgroundColor,
    border: ({ currentTheme }) =>
      `1px solid ${theme.palette[currentTheme].Cards.borderColor}`,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  image: {
    width: 90,
    height: 90
  },
  charTitle: {
    fontFamily: 'StarWars',
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor
  }
}));

export default styles;
