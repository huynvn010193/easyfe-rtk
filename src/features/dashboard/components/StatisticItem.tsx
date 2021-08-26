import * as React from 'react';
import { Paper, Box, Typography, makeStyles } from '@material-ui/core';
export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));

export default function StatisticItem({ icon, label, value }: StatisticItemProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Box>
        <Typography variant='h5'>{value}</Typography>
        <Typography variant='caption'>{label}</Typography>
      </Box>
    </Paper>
  );
}
