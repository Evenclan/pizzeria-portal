import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookingID from './components/views/Tables/BookingID';
import BookingNew from './components/views/Tables/BookingNew';
import EventsID from './components/views/Tables/EventsID';
import EventsNew from './components/views/Tables/EventsNew';
import Waiter from './components/views/Waiter/WaiterContainer';
import OrderID from './components/views/Waiter/OrderID';
import OrderNew from './components/views/Waiter/OrderNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: {main: '#11cb5f'},
  },
});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingID} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/bookings/new`} component={BookingNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={EventsID} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderID} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
