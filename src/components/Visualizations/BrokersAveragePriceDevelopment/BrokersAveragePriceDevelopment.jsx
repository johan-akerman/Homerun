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
    const [askPriceMap, setAskPriceMap] = useState([]);
    const [endPriceMap, setEndPriceMap] = useState([]);
    const [priceDifference, setPriceDifference] = useState([]);

    //Gets data via props from App component. Sets it to allFilteredApartments.
    useEffect(() => {
        setAllFilteredApartments(props.data);
    }, [props.data]);

    useEffect(() => {
        let askPriceDict = {}
        let endPriceDict = {}
        let difference = []

        allFilteredApartments.map((item) => { //for all filtered apartments
            item.map((current) => { //go into each filter
                    if (askPriceDict[current.broker]) { //if current broker key already exists in dictionary
                        askPriceDict[current.broker] = askPriceDict[current.broker] + current.askPrice;
                    } else { //if current broker key does not  exist in dictionary
                        askPriceDict[current.broker] = current.askPrice;
                    }
            });
        });

        allFilteredApartments.map((item) => { //for all filtered apartments
            item.map((current) => { //go into each filter
                    if (endPriceDict[current.broker]) { //if current broker key already exists in dictionary
                        endPriceDict[current.broker] = endPriceDict[current.broker] + current.endPrice;
                    } else { //if current broker key does not  exist in dictionary
                        endPriceDict[current.broker] = current.endPrice;
                    }
            });
        });

        setEndPriceMap(endPriceDict)
        setAskPriceMap(askPriceDict)

        for (var i = 0;i<=Object.values(askPriceMap).length-1;i++) { //Does not work: loop through all and calculate difference
            console.log(Object.values(endPriceMap)[i])
            difference.push(Math.round(((Object.values(askPriceMap)[i] - Object.values(endPriceMap)[i]) / Object.values(askPriceMap)[i]) * 100));
        }
        setPriceDifference(difference);
    }, [allFilteredApartments])

    const data = {
        labels: Object.keys(askPriceMap),
        datasets: [
          {
            data: priceDifference,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      

      return <Bar data={data} options={options} />
}
  
export default BrokersAveragePriceDevelopment;
