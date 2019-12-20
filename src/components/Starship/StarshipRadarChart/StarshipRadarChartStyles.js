import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  root: {
    background: ({ currentTheme }) =>
      theme.palette[currentTheme].backgroundColor
  },
  customCaption: {
    fill: ({ currentTheme }) =>
      theme.palette[currentTheme].PrimaryHeading.fontColor,
    textAnchor: 'middle',
    fontSize: 14,
    fontWeight: 600
  },
  dots: {
    fill: theme.palette['light'].PrimaryHeading.fontColor,
    r: 3
  }
}));

export default styles;
