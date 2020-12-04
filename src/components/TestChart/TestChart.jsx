import React from "react";
import { Line } from "react-chartjs-2";

class TestChart extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      originalData: []
    }
  }

  componentDidMount() {
    this.setState({
      originalData: this.props
    })
  }

  render() {
    <ul>
      {this.props.data.map(({date}) => <li>{date}</li>)}
    </ul>
   


  

//   console.log(this.state.originalData)
//   var speedData = {
//     labels: this.props.data.map(({date}) => date), 
//     filtersets: [{
//       data: this.props.data.map(({askPrice}) => askPrice),
//       lineTension: 0,
//       fill: false,
//       borderColor: 'orange',
//       pointBorderColor: 'orange',
//       pointRadius: 5,
//       pointHoverRadius: 10,
//       pointBorderWidth: 2,
//       pointStyle: 'rectRounded'
//     }, {
//       data: this.props.data.map(({endPrice}) => endPrice),
//       lineTension: 0,
//       fill: false,
//       borderColor: 'green',
//       pointBorderColor: 'green',
//       pointRadius: 5,
//       pointHoverRadius: 10,
//       pointBorderWidth: 2,
//       pointStyle: 'rectRounded'
//     }]
// };

 return (


<h1>hej</h1>
        // <Line
        //   data={speedData}
        //   options={{
        //     borderColor: "orange",
        //     responsive: true,
        //     lineTension : 0,
        //     scales: {
        //       yAxes: [
        //         {
        //           ticks: {
        //             autoSkip: true,
                 
        //           },
        //           gridLines: {
        //             display: true
        //           }
        //         }
        //       ],
        //       xAxes: [
        //         {
        //           gridLines: {
        //             display: false
        //           }
        //         }
        //       ]
        //     }
        //   }}
        // />

        )
    }
}


export default TestChart;