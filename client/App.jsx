import React from 'react';
// import LineGraph from 'client/crypto-client/src/lineGraph.js';
import { Line } from 'react-chartjs-2';

const Axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          }
        ]
      }
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Axios.get('http://localhost:3000/cryptobit').then(({ data }) => {
      //console.log(data.bpi)
      const labels = [Object.keys(data.bpi)];
      const cryptoData = [Object.values(data.bpi)];
      console.log(labels);
      console.log(cryptoData);
      this.setState({
        data: {
          labels: labels.flat(),
          datasets: [
            {
              label: 'BitCoin Value',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: cryptoData.flat()
            }
          ]
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Bitcoin Data</h2>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default App;
