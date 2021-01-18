import React, {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";


const SquareMeterPriceDevelopment = props => {
   const [allFilteredApartments, setAllFilteredApartments] = useState([]);



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

    useEffect(() => {
        setAllFilteredApartments(props.data);
    }, [props.data]);


    const loading = (
        <h1>loading...</h1>  
    );

    const notLoading = (
        (<Line  options={options}
            data={{
                labels: allFilteredApartments.map(({date}) => date), 
                filtersets: [{
                    data: allFilteredApartments.map(({askPrice}) => askPrice),
                    label: "Ask Price",
                    borderColor: "#3333ff",
                    fill: false,
                }, {
                    data: allFilteredApartments.map(({pricePerSquare}) => pricePerSquare),
                    label: "End Price",
                    borderColor: "red",
                    backgroundColor: "rgba(255,0,0,0.5",
                    fill: false,
                }],
            }}
        />
    ));


    return allFilteredApartments.length > 0 ? notLoading : loading
}

export default SquareMeterPriceDevelopment;