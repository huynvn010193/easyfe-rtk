import { Box, Grid, makeStyles, LinearProgress } from '@material-ui/core';
import { ChatBubble, ChatRounded, PeopleAlt } from '@material-ui/icons';
import { useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StatisticItem from './components/StatisticItem';
import {
  dashboardAction,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
  loading: {
    position: 'relative',
    top: theme.spacing(-1),
    widh: '100%',
  },
}));

export default function Dashboard() {
  const dispatch = useDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);
  const classes = useStyles();

  console.log({
    loading,
    statistics,
    highestStudentList,
    lowestStudentList,
    rankingByCityList,
  });

  useEffect(() => {
    dispatch(dashboardAction.fetchData());
  }, [dispatch]);
  return (
    <Box className={classes.root}>
      {/* loading */}
      {loading && <LinearProgress className={classes.loading} />}
      {/* Statistic Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize='large' color='primary' />}
            label='female'
            value={statistics.maleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<ChatRounded fontSize='large' color='primary' />}
            label='female'
            value={statistics.femaleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<ChatBubble fontSize='large' color='primary' />}
            label='mark >= 8'
            value={statistics.highMarkCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize='large' color='primary' />}
            label='mark =< 5'
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
