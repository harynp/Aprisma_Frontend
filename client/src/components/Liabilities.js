import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2';

const data2 = {
	labels: [
		'Loan (11%)',
		'Credit Card (89%)'
	],
	datasets: [{
        data: [11,89],
		backgroundColor: [
		'darkblue',
		'green'
		],
		hoverBackgroundColor: [
		'red',
		'darkgreen'
        ]
	}]
};

class Liabilities extends Component {
    render() {
        return (
            <div>
            <h3>Liabilities</h3>
            <Doughnut data={data2} />
            <span>As of 20 february 2014</span>
            
            <table className="table table-striped">
            <thead>
            <tr>
                <th>Information</th>
                <th>Account</th>
                <th>Count</th>
            </tr>
            </thead>
            <tbody>
            <tr style={{color: 'darkblue'}}>
                <td>Loan</td>
                <td>2 Account</td>
                <td>IDR 400.000.000</td>
            </tr>
            <tr style={{color: 'darkgreen'}}>
                <td>Credit Card</td>
                <td>5 Account</td>
                <td>IDR 50.000.000</td>
            </tr>
            <tr>
                <th>Liabilities</th>
                <th>7 Account</th>
                <th>IDR 450.000.000</th>
            </tr>
            </tbody>
            </table>
            </div>
        )
    }
}

export default Liabilities