import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  progress: ({ currentTheme }) => ({
    background: theme.palette[currentTheme].backgroundColor
  })
}));

export default styles;
