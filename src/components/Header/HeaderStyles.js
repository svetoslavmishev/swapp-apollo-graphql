import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  appBar: ({ currentTheme }) => theme.palette[currentTheme].AppBar,
  toolBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer',
    '&:div > p': {
      background: 'red'
    }
  }
}));

export default styles;
