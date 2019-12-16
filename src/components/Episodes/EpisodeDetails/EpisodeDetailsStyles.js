import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  cardContainer: {
    padding: '30px 100px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  card: {
    display: 'flex',
    margin: 4,
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].Cards.backgroundColor
  },
  characters: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  content: {
    width: '100%',
    border: ({ currentTheme }) => theme.palette[currentTheme].Cards.borderColor
  },
  cover: {
    minWidth: 200,
    minHeight: 200,
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor
  },
  episodeTitle: {
    fontFamily: 'StarWars',
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor
  },
  description: {
    color: ({ currentTheme }) => theme.palette[currentTheme].textColor
  },
  descriptionDetails: {
    '& span:nth-child(even)': {
      color: theme.palette.commonColors.lightBlue
    },
    '& span:nth-child(odd)': {
      color: ({ currentTheme }) =>
        theme.palette[currentTheme].PrimaryHeading.fontColor
    }
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
