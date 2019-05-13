import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import { Homepage } from './pages';
import DefaultLayout from './layout';
import globalTheme from './globalTheme';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={globalTheme}>
        <Switch>
          <DefaultLayout>
            <Route path="/" component={Homepage} />
          </DefaultLayout>
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
