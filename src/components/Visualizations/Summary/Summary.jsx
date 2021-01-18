import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Summary = props => {
 
  const [allFilteredApartments, setAllFilteredApartments] = useState([]);

  //Gets data via props from App component. Sets it to allFilteredApartments.
  useEffect(() => {
      setAllFilteredApartments(props.data);
  }, [props.data]);

  return (
    <TableContainer>
      <Table
        stickyHeader
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Area</TableCell>
            <TableCell align="left">Transactions</TableCell>
            <TableCell align="left">sqm price</TableCell>
            <TableCell align="left">Ask price</TableCell>
            <TableCell align="left">End price</TableCell>
            <TableCell align="left">Price development</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allFilteredApartments.map((item, index) => {
            let averageSquareMeterPrice = item.map((current) => current.pricePerSquare).reduce((a, b) => a + b, 0) / item.length;
            let averageEndPrice = item.map((current) => current.endPrice).reduce((a, b) => a + b, 0) / item.length;
            let averageAskPrice = item.map((current) => current.askPrice).reduce((a, b) => a + b, 0) / item.length;
            let totalAskPrice = item.map((current) => current.askPrice).reduce((a, b) => a + b, 0);
            let totalEndPrice = item.map((current) => current.endPrice).reduce((a, b) => a + b, 0);
            let averagePriceDevelopment = totalEndPrice - totalAskPrice;
            let getColor = (i) => {
              if (i === 0) return '#8bc34a';
              else if (i === 1) return '#03a9f4';
              else if (i === 2) return '#ff9800';
              else if (i === 3) return '#9c27b0';
              else if (i === 4) return '#673ab7';
            };

            return (
              <TableRow key={`Table Row${item.date} | ${index}`}>
                <TableCell component="th" scope="row">
                <div
              style={{
                borderRadius: 100,
                width: 14,
                height: 14,
                backgroundColor: getColor(index),
              }}
            />
                </TableCell>
                <TableCell align="left">{item.length}</TableCell>
                <TableCell align="left">{averageSquareMeterPrice}</TableCell>
                <TableCell align="left">{averageAskPrice}</TableCell>
                <TableCell align="left">{averageEndPrice}</TableCell>
                <TableCell align="left">{averagePriceDevelopment}</TableCell>
            </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Summary;
