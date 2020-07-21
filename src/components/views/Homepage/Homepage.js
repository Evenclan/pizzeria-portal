import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { id: '1', order: 'cash', earnings: '$15' },
  { id: '2', order: 'card', earnings: '$26' },
  { id: '3', order: 'card', earnings: '$67' },
  { id: '4', order: 'waiting', earnings: '$42' },
  { id: '5', order: 'cash', earnings: '$116' },
];

const Homepage = () => (
  <div className={styles.component}>
    <h2>Homepage view</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order nr</TableCell>
            <TableCell>Pay method</TableCell>
            <TableCell>Earnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/Homepage/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>

              <TableCell component="th" scope="row">
                <strong>{row.earnings}</strong>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Homepage;
