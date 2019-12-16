import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 64px)',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  card: {
    minWidth: 240,
    maxWidth: 280,
    maxHeight: 450,
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
    paddingTop: '100%',
    margin: '10px 0'
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
  },
  descriptionDetails: {
    '& span:nth-child(even)': {
      color: theme.palette.commonColors.lightBlue
    },
    '& span:nth-child(odd)': {
      color: ({ currentTheme }) =>
        theme.palette[currentTheme].PrimaryHeading.fontColor
    }
  }
}));

export default styles;
