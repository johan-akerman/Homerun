import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { fetchSummaryData } from '../../../api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DenseTable = () => {
  const classes = useStyles();

  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchSummaryData());
    };
    fetchAPI();
  }, []);

  const summaryTable = dailyData.length ? (
    <TableContainer>
      <Table
        className={classes.table}
        stickyHeader
        size="small"
        aria-label="a dense table"
      >
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
          {dailyData.map((item, index) => (
            <TableRow key={`Table Row${item.date} | ${index}`}>
              <TableCell component="th" scope="row">
                {item.date}
              </TableCell>
              <TableCell align="right">{item.pricePerSquare}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.priceDevelopment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;

  return <div>{summaryTable ? summaryTable : 'hej'}</div>;
};

export default DenseTable;
