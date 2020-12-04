import React, { useState, useEffect } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import axios from "axios";

const DoughnutChart = () => {
  


  const data = {
    labels: [
      '1',
      '2',
      "3"


    ],
    filtersets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56', 
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
  return (

  
        <Doughnut
          data={data}
          options={{
            responsive: true,
   maintainAspectRatio: true, 
          }}
     
        />

  );
};

export default DoughnutChart;