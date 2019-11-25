import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  inputs: ({ currentTheme }) => theme.palette[currentTheme].Inputs,
  solidButton: ({ currentTheme }) => theme.palette[currentTheme].SolidButtons,
  progress: ({ currentTheme }) => ({
    background: theme.palette[currentTheme].backgroundColor
  })
}));

export default styles;
