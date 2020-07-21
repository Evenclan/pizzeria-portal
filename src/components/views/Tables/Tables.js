import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './Tables.module.scss';
// import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

const tables = [
  { hour: '10:00', status1: 'booking', status2: 'booking' },
  { hour: '10:30', status3: 'event' },
  { hour: '11:00', status2: 'booking', status3: 'event' },
  { hour: '11:30', status1: 'event', status3: 'none' },
  { hour: '12:00', status2: 'event', status3: 'none' },
];

const renderActions = status => {
  switch (status) {
    case 'booking':
      return (
        <>
          <Button>Booking</Button>
        </>
      );
    case 'event': {
      return (
        <>
          <Button>Event</Button>
        </>
      );
    }
  }
};

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Container>
        <Toolbar />
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hour</TableCell>
                <TableCell>Table nr 1</TableCell>
                <TableCell>Table nr 2</TableCell>
                <TableCell>Table nr 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.hour}</TableCell>
                  <TableCell>{renderActions(row.status1)}</TableCell>
                  <TableCell>{renderActions(row.status2)}</TableCell>
                  <TableCell>{renderActions(row.status3)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>

      <Button variant="contained" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Booking ID</Button>
      <Button variant="contained" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking</Button>
      <Button variant="contained" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Event ID</Button>
      <Button variant="contained" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event</Button>

    </div>
  );
};

export default Tables;
