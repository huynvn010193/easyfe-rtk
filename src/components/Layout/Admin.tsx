import * as React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '300px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,
    minHeight: '100vh'
  },
  header: {},
  sidebar: {},
  main: {}
}))

export default function AdminLayout() {
  const classes = useStyles();
  return <Box className={classes.root}>
    <Box className={classes.header}>HEADER</Box>
    <Box className={classes.sidebar}>SIDEBAR</Box>
    <Box className={classes.main}>MAIN</Box>
  </Box>;
}
