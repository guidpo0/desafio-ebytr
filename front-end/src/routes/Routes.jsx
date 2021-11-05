import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import MyTasks from '../pages/MyTasks';
import isAuthenticated from '../auth/isAuthenticated';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={
        () => (isAuthenticated()
          ? <Redirect to={{ pathname: '/minhas-tarefas' }} />
          : <Login />)
      }
    />
    <Route
      path="/minhas-tarefas"
      render={
        () => (isAuthenticated()
          ? <MyTasks />
          : <Redirect to={{ pathname: '/' }} />)
      }
    />
  </Switch>
);

export default Routes;
