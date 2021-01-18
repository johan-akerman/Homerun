import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";  


const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    }, scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

const NumberOfSales = props => {
    const [allFilteredApartments, setAllFilteredApartments] = useState([]);
    const [dailyData, setDailyData] = useState([]);

    const [dictionary, setDictionary] = useState([]);

    //Gets data via props from App component. Sets it to allFilteredApartments.
    useEffect(() => {
        setAllFilteredApartments(props.data);
    }, [props.data]);

    useEffect(() => {
        let parentDictionary = []
        allFilteredApartments.map((item) => { 
            let tmpDictionary = {}
            item.map((current) => { 
                if (tmpDictionary[current.date]) { 
                    tmpDictionary[current.date] = tmpDictionary[current.date] + 1;
                } else { 
                    tmpDictionary[current.date] = 1;
                }
            });
            parentDictionary.push(tmpDictionary)
        });
        setDictionary(parentDictionary)
    }, [allFilteredApartments])


//    [{
//     filterIndex: 0,
//     date: "2020-11-15",
//     numberOfSales: 10,
//    },
// ] 

    useEffect(() => {  //creates daily data
        let parentDictionary = []
        console.log(allFilteredApartments)

        allFilteredApartments.map((item) => { //for each apartment 
            let tmpDictionary = {}
            item.map((current) => {  //loop through each filter



                if (tmpDictionary[current.date]) { 
                    tmpDictionary[current.date] = tmpDictionary[current.date] + 1;
                } else { 
                    tmpDictionary[current.date] = 1;
                }
            });
            parentDictionary.push(tmpDictionary)
        });
        setDictionary(parentDictionary)
    }, [allFilteredApartments])


    const dataSets = [];
    const dataSet = {
        label: 'test',
        data: [],
        backgroundColor: '#000', 
    }

    const data = {
        labels: Object.keys(dictionary),
        datasets: [
            dictionary.map((item) => {
 // {
            //     label: '# of Votes',
            //     data: Object.values(dictionary),
            //     fill: false,
            //     backgroundColor: '#8bc34a',
            //     borderColor: '#8bc34a',
            //   },
            })
        ],
      }
      
    
     
 


      return <Line data={data} options={options} />
}
  
export default NumberOfSales;
