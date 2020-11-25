import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const TestChart = () => {


  var speedData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Car Speed (mph)",
      data: [0, 59, 75, 20, 20, 55, 40],
      lineTension: 0,
      fill: false,
      borderColor: 'orange',
      pointBorderColor: 'orange',
      pointRadius: 5,
      pointHoverRadius: 10,
      pointBorderWidth: 2,
      pointStyle: 'rectRounded'
    }, {
      label: "Car Speed (mph)",
      data: [10, 30, 20, 50, 20, 32, 47],
      lineTension: 0,
      fill: false,
      borderColor: 'green',
      pointBorderColor: 'green',
      pointRadius: 5,
      pointHoverRadius: 10,
      pointBorderWidth: 2,
      pointStyle: 'rectRounded'
    }]
  };
  return (

  
        <Line
          data={speedData}
          options={{
            borderColor: "orange",
            responsive: true,
            lineTension : 0,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />

  );
};

export default TestChart;