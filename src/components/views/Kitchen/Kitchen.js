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
import styles from './Kitchen.module.scss';

const demoContent = [
  { id: 1, tableOrder: '3', order: ['kebab', 'coke'], status: 'ordered' },
  { id: 2, tableOrder: '8', order: ['pizza', 'coke', 'sallad', 'kebab'], status: 'done' },
  { id: 3, tableOrder: '4', order: ['sallad', 'tea'], status: 'ready' },
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <>
          <Button>Preparing</Button>
        </>
      );
    case 'done':
      return (
        <>
          <Button>Finished preparing</Button>
        </>
      );
    case 'ready':
      return (
        <>
          <Button>Ready to pick up</Button>
        </>
      );
  }
};

const Kitchen = () => {
  return (
    <div className={styles.component}>
      <h2>Kitchen view</h2>
      <Container>
        <Toolbar />
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>OrderID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Table nr</TableCell>
                <TableCell>Order Details</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.tableOrder}</TableCell>
                  <TableCell>{row.order.join(', ')}</TableCell>
                  <TableCell>{renderActions(row.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};

export default Kitchen;
