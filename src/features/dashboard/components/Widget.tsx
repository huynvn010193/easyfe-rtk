import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export interface IWidgetProps {
  title: string;
  children?: any;
}

export default function Widget({ title, children }: IWidgetProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant='button'>{title}</Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}
