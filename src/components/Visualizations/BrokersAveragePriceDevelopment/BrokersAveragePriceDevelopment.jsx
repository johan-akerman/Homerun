import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";  

const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

const BrokersAveragePriceDevelopment = props => {
    const [allFilteredApartments, setAllFilteredApartments] = useState([]);
    const [priceDevelopmentDictionary, setPriceDevelopmentDictionary] = useState([]);
    
    //Gets data via props from App component. Sets it to allFilteredApartments.
    useEffect(() => {
        setAllFilteredApartments(props.data);
    }, [props.data]);

    useEffect(() => {
        let totalAskPriceDict = {} //object with key value pair for each broker with their total ask price.
        let totalEndPriceDict = {} //object with key value pair for each broker with their total ask price.
        let priceDevelopmentDict = {}

        allFilteredApartments.map((item) => { //for all filtered apartments
            item.map((current) => { //for each apartment in each filter
              if (totalAskPriceDict[current.broker]) {
                totalAskPriceDict[current.broker] = totalAskPriceDict[current.broker] + current.askPrice;
                totalEndPriceDict[current.broker] = totalEndPriceDict[current.broker] + current.endPrice;
              } else {
                totalAskPriceDict[current.broker] = current.askPrice;
                totalEndPriceDict[current.broker] = current.endPrice;
              }       
              priceDevelopmentDict[current.broker] = Math.round(((totalEndPriceDict[current.broker] - totalAskPriceDict[current.broker]) /totalAskPriceDict[current.broker]) * 100);
            });
        });

        setPriceDevelopmentDictionary(priceDevelopmentDict);
    }, [allFilteredApartments])

    const data = {
        labels: Object.keys(priceDevelopmentDictionary),
        datasets: [
          {
            data: Object.values(priceDevelopmentDictionary),
            backgroundColor: [
              '#8bc34a',
              '#03a9f4',
              '#ff9800',
              '#9c27b0',
              '#673ab7',
            ],
          },
        ],
      }
      return <Bar data={data} options={options} />
}
  
export default BrokersAveragePriceDevelopment;
