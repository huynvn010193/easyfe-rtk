import { Box, Grid, makeStyles, LinearProgress, Typography } from '@material-ui/core';
import { ChatBubble, ChatRounded, PeopleAlt } from '@material-ui/icons';
import { useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StatisticItem from './components/StatisticItem';
import StudentRanking from './components/StudentRankingList';
import Widget from './components/Widget';
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
      {/*All Student ranking*/}
      <Box mt={4}>
        <Typography variant='h4'>All Student</Typography>
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title='Student with hightest mark'>
                <StudentRanking studentList={highestStudentList} />
              </Widget>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title='Student with lower mark'>
                <StudentRanking studentList={lowestStudentList} />
              </Widget>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4}>
          <Typography variant='h4'>Ranking by city</Typography>
          <Grid container spacing={3}>
            {rankingByCityList.map((ranking) => (
              <Grid item xs={12} md={6} lg={3} key={ranking.cityId}>
                <Widget title={ranking.cityName}>
                  <StudentRanking studentList={ranking.rankingList} />
                </Widget>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
