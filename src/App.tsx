import { Button } from '@material-ui/core';
import citiApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    citiApi.getAll().then((response) => console.log(response));
  }, []);
  return (
    <>
      <Button variant='contained' color='primary' onClick={() => dispatch(authActions.logout())}>
        Logut
      </Button>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <PrivateRoute path='/admin'>
          <AdminLayout />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
