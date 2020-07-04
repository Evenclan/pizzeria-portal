import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingID from './components/views/TablesBookingID/TablesBookingID';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsID from './components/views/TablesEventsID/TablesEventsID';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderID from './components/views/WaiterOrderID/WaiterOrderID';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';


function App() {
  return (

    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBookingID} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:new`} component={TablesBookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={TablesEventsID} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:new`} component={TablesEventsNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderID} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrderNew} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
