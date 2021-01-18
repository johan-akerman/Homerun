import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import styles from "./Summary.module.css"

import TableRow from '@material-ui/core/TableRow';

const Summary = props => {
 
  const [allFilteredApartments, setAllFilteredApartments] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState([]);
  const [avgSqmPrice, setAvgSqmPrice] = useState([]);
  const [avgAskPrice, setAvgAskPrice] = useState([]);
  const [avgEndPrice, setAvgEndPrice] = useState([]);
  const [avgPriceDevelopment, setAvgPriceDevelopment] = useState([]);



  //Gets data via props from App component. Sets it to allFilteredApartments.
  useEffect(() => {
      setAllFilteredApartments(props.data);
  }, [props.data]);


  useEffect(() => {
    let tmpTotalTransactions = 0;
    let tmpAvgSqmPrice = 0;
    let tmpAvgAskPrice = 0;
    let tmpAvgEndPrice = 0;
    let tmpAvgPriceDevelopment = 0;

    allFilteredApartments.map((item, index) => {
        tmpTotalTransactions = tmpTotalTransactions + item.length;
        tmpAvgSqmPrice = tmpAvgSqmPrice + (item.map((current) => current.pricePerSquare).reduce((a, b) => a + b, 0) / item.length);
        tmpAvgAskPrice = tmpAvgAskPrice + (item.map((current) => current.askPrice).reduce((a, b) => a + b, 0) / item.length);
        tmpAvgEndPrice = tmpAvgEndPrice + (item.map((current) => current.endPrice).reduce((a, b) => a + b, 0) / item.length);
        tmpAvgPriceDevelopment = Math.round((tmpAvgPriceDevelopment + (Math.round(((tmpAvgEndPrice - tmpAvgAskPrice) / tmpAvgAskPrice) * 100))));
    });

    setTotalTransactions(tmpTotalTransactions);
    setAvgSqmPrice(Math.round(tmpAvgSqmPrice / allFilteredApartments.length));
    setAvgAskPrice(Math.round(tmpAvgAskPrice / allFilteredApartments.length));
    setAvgEndPrice(Math.round(tmpAvgEndPrice / allFilteredApartments.length));
    setAvgPriceDevelopment(Math.round(tmpAvgPriceDevelopment / allFilteredApartments.length));

  
}, [allFilteredApartments])

  return (
    <TableContainer>
      <Table
        stickyHeader
      >
        <TableHead className={styles.tablehead}>
          <TableRow>
            <TableCell align="left" className={styles.cell}>
              <Typography variant="h4">
              <CountUp start={0} end= {allFilteredApartments.length} duration={1} separator="." />
  
               </Typography>
              <Typography variant="caption" gutterBottom>Filters</Typography>
            </TableCell>

            <TableCell align="left" className={styles.cell}>
              <Typography variant="h4">
                <CountUp start={0} end= {totalTransactions} duration={1} separator="." /></Typography>
              <Typography variant="caption" gutterBottom>Tot transactions</Typography>
            </TableCell>

            <TableCell align="left" className={styles.cell}>
              <Typography variant="h4">
                <CountUp start={0} end= {avgSqmPrice} duration={1} separator="." />
              </Typography>
              <Typography variant="caption" gutterBottom>Avg. sqm price</Typography>
            </TableCell>

            <TableCell align="left" className={styles.cell}>
              <Typography variant="h4">
                <CountUp start={0} end= {avgAskPrice} duration={1} separator="." />
              </Typography>
              <Typography variant="caption" gutterBottom>Avg. ask price</Typography>
            </TableCell>

            <TableCell align="left" className={styles.cell}>
              <Typography variant="h4">
                <CountUp start={0} end= {avgEndPrice} duration={1} separator="." />
              </Typography>
              <Typography variant="caption" gutterBottom>Avg. end price</Typography>
            </TableCell>

            <TableCell align="left" className={styles.cell}>
              <Typography variant="h4">
                <CountUp start={0} end= {avgPriceDevelopment} duration={1} separator="." />%
              </Typography>
              <Typography variant="caption" gutterBottom>Avg. price development</Typography>
            </TableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {allFilteredApartments.map((item, index) => {
            let averageSquareMeterPrice = item.map((current) => current.pricePerSquare).reduce((a, b) => a + b, 0) / item.length;
            let averageEndPrice = item.map((current) => current.endPrice).reduce((a, b) => a + b, 0) / item.length;
            let averageAskPrice = item.map((current) => current.askPrice).reduce((a, b) => a + b, 0) / item.length;
            let averagePriceDevelopment = Math.round(((averageEndPrice - averageAskPrice) / averageAskPrice) * 100);
            let getColor = (i) => {
              if (i === 0) return '#8bc34a';
              else if (i === 1) return '#03a9f4';
              else if (i === 2) return '#ff9800';
              else if (i === 3) return '#9c27b0';
              else if (i === 4) return '#673ab7';
            };
            
            return (
              <TableRow key={`Table Row${item.date} | ${index}`}>
                <TableCell component="th" scope="row" className={styles.cell}>
                <div
              style={{
                borderRadius: 100,
                width: 14,
                height: 14,
                backgroundColor: getColor(index),
              }}
            /> 
                </TableCell>
                <TableCell align="left" className={styles.cell}> {item.length}</TableCell>
                <TableCell align="left" className={styles.cell}>{averageSquareMeterPrice}</TableCell>
                <TableCell align="left" className={styles.cell}>{averageAskPrice}</TableCell>
                <TableCell align="left" className={styles.cell}>{averageEndPrice}</TableCell>
                <TableCell align="left" className={styles.cell}>{averagePriceDevelopment}</TableCell>
            </TableRow>
            )

            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Summary;
