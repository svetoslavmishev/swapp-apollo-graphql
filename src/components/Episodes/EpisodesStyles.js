import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  }
}));

export default styles;
