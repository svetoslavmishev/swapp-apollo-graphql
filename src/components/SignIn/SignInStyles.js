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
    padding: 30
  },
  inputs: ({ currentTheme }) => theme.palette[currentTheme].Inputs,
  button: { margin: 'auto', width: 0 },
  solidButton: ({ currentTheme }) => theme.palette[currentTheme].SolidButtons,
  progress: ({ currentTheme }) => ({
    background: theme.palette[currentTheme].backgroundColor
  })
}));

export default styles;
