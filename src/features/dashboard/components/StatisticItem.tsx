import * as React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string;
}

const useStyles = makeStyles((theme) => ({
  root: {}
}));

export default function StatisticItem({ icon, label, value }: StatisticItemProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Typography variant="h5">{value}</Typography>
      <Typography variant="caption">{label}</Typography>
    </Paper>
  );
}
