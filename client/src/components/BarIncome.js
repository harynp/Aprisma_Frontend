import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Profit Income',
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [25, 35, 40, 55, 70, 90,98],
      }
    ]
  };


class BarKotak extends Component {
    render() {
        return (
        <div className="card">
            <div className="card-header ">
                <h3>Profit And Lost</h3>
            </div>
            <div className="card-block">
                <Bar
                data={data}
                width={100}
                height={50}
                />
               
            </div>
        </div>
        )
    }
}

export default BarKotak
