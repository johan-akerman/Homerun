import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  


  const data = {
        filtersets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [1000, 500, 1500]
        },

        
    
    ]
    };
  return (

  
        <Bar
          data={data}
          options={{
            responsive: true,
   maintainAspectRatio: true, 
          }}
     
        />

  );
};

export default BarChart;