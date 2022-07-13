import { Button, CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppSelector } from 'app/hooks';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { authActions, selectIsLogging } from '../authSlice';

export interface LoginPageProps {}

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
  btnLogin: {
    marginTop: theme.spacing(2),
  },
}));

export default function LoginPage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const isLogging = useAppSelector(selectIsLogging);

  console.log('isLogging', isLogging);

  const handleLoginClick = () => {
    // TODO: get username + password from login from
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Student Manament
        </Typography>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.btnLogin}
          onClick={handleLoginClick}
        >
          {isLogging && <CircularProgress size={20} color='secondary' />} &nbsp; Fake Login
        </Button>
      </Paper>
    </div>
  );
}
