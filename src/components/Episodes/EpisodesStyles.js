import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-between',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  }
}));

export default styles;
