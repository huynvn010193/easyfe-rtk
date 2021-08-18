import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

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
}));

export default function LoginPage() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Student Manament
        </Typography>
        <Button fullWidth variant='contained' color='primary'>
          Fake Login
        </Button>
      </Paper>
    </div>
  );
}
