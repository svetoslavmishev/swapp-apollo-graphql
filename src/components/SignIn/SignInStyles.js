import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
    background: theme.palette.dark.textColor
  },
  inputs: ({ currentTheme }) => theme.palette[currentTheme].Inputs,
  button: {
    fontWeight: 600,
    margin: 'auto',
    width: 0,
    color: theme.palette.commonColors.yellow,
    '&:hover': {
      color: 'black',
      background: theme.palette.commonColors.yellow
    }
  },
  solidButton: ({ currentTheme }) => theme.palette[currentTheme].SolidButtons,
  logo: {
    fontFamily: 'StarWars',
    color: theme.palette.commonColors.yellow,
    fontSize: '8vw',
    margin: 'auto',
    width: '100%'
  }
}));

export default styles;
