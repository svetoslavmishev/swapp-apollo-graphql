import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minHeight: 'calc(100vh - 64px)',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  card: {
    maxWidth: 300,
    margin: 30
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  title: {
    fontFamily: 'StarWars',
    color: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor
  },
  subTitle: {
    fontFamily: 'StarWars',
    color: theme.palette.commonColors.lightBlue,
    fontSize: 16
  }
}));

export default styles;
