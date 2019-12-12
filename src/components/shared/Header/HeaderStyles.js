import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  appBar: ({ currentTheme }) => theme.palette[currentTheme].AppBar,
  toolBar: {
    fontFamily: 'StarWars',
    fontSize: 24,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer'
  },
  toolBarLeft: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    '& a': {
      padding: 8,
      color: ({ currentTheme }) => theme.palette[currentTheme].AppBar.fontColor
    },
    '&:hover a, svg': {
      cursor: 'pointer'
    }
  },
  logo: {
    color: theme.palette.commonColors.yellow
  }
}));

export default styles;
