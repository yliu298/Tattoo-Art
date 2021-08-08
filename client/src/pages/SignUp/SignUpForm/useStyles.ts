import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 12,
    color: 'rgb(0,0,0,0.4)',
    marginTop: '15px',
    fontWeight: 'bold',
  },
  inputs: {
    borderRadius: 0,
    height: '2rem',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#000',
    fontWeight: 'bold',
  },
}));

export default useStyles;
