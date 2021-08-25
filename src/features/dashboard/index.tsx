import { Box, Grid } from '@material-ui/core';
import { useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  dashboardAction,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

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
  return <Box>
    {/* Statistic Section */}
    <Grid container>
      <Grid item xs={12} md={6} lg={4} xl={3}>
      </Grid>
    </Grid>
  </Box>;
}
