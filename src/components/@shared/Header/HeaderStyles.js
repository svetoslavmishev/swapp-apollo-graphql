import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  appBar: ({ currentTheme }) => theme.palette[currentTheme].AppBar,
  toolBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer'
  },
  toolBarLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    '& a': {
      padding: 8,
      textDecoration: 'none',
      color: ({ currentTheme }) => theme.palette[currentTheme].AppBar.fontColor
    },
    '&:hover svg': {
      cursor: 'pointer'
    }
  }
}));

export default styles;
