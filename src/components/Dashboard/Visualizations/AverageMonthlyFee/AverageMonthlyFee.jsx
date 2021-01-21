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
  

const AverageMonthlyFee = props => {
    const [allFilteredApartments, setAllFilteredApartments] = useState([]);
    const [allAverageFees, setAllAverageFees] = useState([]);
    const [allTitles, setAllTitles] = useState([]);


    //Gets data via props from App component. Sets it to allFilteredApartments.
    useEffect(() => {
        setAllFilteredApartments(props.data);
    }, [props.data]);



    useEffect(() => {
        let averageFees = []
        let allAreas = []

        allFilteredApartments.map((item, index) => {
            let averageItemFee = item.map((current) => current.monthlyFee).reduce((a, b) => a + b, 0) / item.length;
            let areaName = item[0].area;
            allAreas.push(areaName);
            averageFees.push(averageItemFee);
        });
        setAllAverageFees(averageFees)
        setAllTitles(allAreas);
    }, [allFilteredApartments])



    const data = {
        labels: allTitles,
        datasets: [
          {
            data: allAverageFees,
            backgroundColor: [
              '#8bc34a',
              '#03a9f4',
              '#ff9800',
              '#9c27b0',
              '#673ab7',
            ],


          
           
            borderWidth: 1,
          },
        ],
      }

      return <Bar data={data} options={options} />
}
  
export default AverageMonthlyFee;
