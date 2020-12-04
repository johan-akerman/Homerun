import React, {useState, useEffect} from "react";
import {fetchSquareMeterPriceDevelopmentData} from "../../api";
import {fetchPriceDevelopmentData} from "../../api";
import {Line} from "react-chartjs-2";

const LineChart = () => {
    const [dailyData, setDailyData,] = useState([]);
    const [priceDevelopment, setPriceDevelopment,] = useState([]);

    useEffect(() => {
         const fetchAPI = async () => {
           setPriceDevelopment(await fetchPriceDevelopmentData());
           setDailyData(await fetchSquareMeterPriceDevelopmentData());
         }
         fetchAPI();
    }, []);

    const squareMeterDevelopmentChart = (
        dailyData.length ? //if the array exists 
        (<Line 
            data={{
                labels: dailyData.map(({date}) => date), 
                filtersets: [{
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


        const priceDevelopmentChart = (
            priceDevelopment.length ? //if the array is 
            (<Line 
                data={{
                    labels: priceDevelopment.map(({date}) => date), 
                    filtersets: [{
                        data: priceDevelopment.map(({askPrice}) => askPrice),
                        label: "Ask Price",
                        borderColor: "#3333ff",
                        fill: false,
                    }, {
                        data: priceDevelopment.map(({endPrice}) => endPrice),
                        label: "End Price",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5",
                        fill: false,
                    }],
                }}
            />) : null);

    return (
       <div>
           {priceDevelopmentChart ? priceDevelopmentChart : squareMeterDevelopmentChart }
       </div>
    )
}

export default LineChart;