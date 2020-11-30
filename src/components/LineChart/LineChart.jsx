import React, {useState, useEffect} from "react";
import {fetchData} from "../../api";
import {Line} from "react-chartjs-2";

const LineChart = ({data: {date, askPrice, endPrice}}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
         const fetchAPI = async () => {
            setDailyData(await fetchData());
         }
         fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? //if the array is 
        (<Line 
            data={{
                labels: dailyData.map(({date}) => date), 
                datasets: [{
                    data: dailyData.map(({askPrice}) => askPrice),
                    label: "Ask Price",
                    borderColor: "#3333ff",
                    fill: false,
                }, {
                    data: dailyData.map(({pricePerSquare}) => pricePerSquare),
                    label: "End Price",
                    borderColor: "red",
                    backgroundColor: "rgba(255,0,0,0.5",
                    fill: false,
                }],
            }}
        />) : null);

    return (
       <div>
           {console.log(dailyData)}
           {lineChart}
       </div>
    )
}

export default LineChart;