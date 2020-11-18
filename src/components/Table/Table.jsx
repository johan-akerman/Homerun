import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
  createData('Östermalm', 102754, 6654000, 829, "+4.5%"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer >
      <Table className={classes.table} stickyHeader size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Område</TableCell>
            <TableCell align="right">Kr/ kvm</TableCell>
            <TableCell align="right">Medelpris</TableCell>
            <TableCell align="right">Antal sålda</TableCell>
            <TableCell align="right">Prisutveckling</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}