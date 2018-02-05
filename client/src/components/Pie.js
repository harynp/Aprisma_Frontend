import React, {Component} from 'react';
import {Doughnut, Bar, HorizontalBar} from 'react-chartjs-2';

const data = {
	labels: [
		'External Bank (27%)',
		'My Bank (73%)',
	],
	datasets: [{
        data: [27, 73],
		backgroundColor: [
		'orange',
		'blue',
		],
		hoverBackgroundColor: [
		'red',
		'darkgreen',
        ]
	}]
};

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

class PieKacang extends Component {
    render() {
        const {divStyle, hrStyle} = styles
        return (
            <div className="card">
                <div className="card-header ">
                    <h3>Account Overview</h3>
                </div>
                <div className="card-block">
                    <h4>Assets</h4>
                    <Doughnut data={data} />   
                    <span>As of 20 february 2014</span>
                    <table class="table table-striped">
                    <tr style={{color: 'blue'}}>
                        <th>My Bank</th>
                        <th>40 Account</th>
                        <th>IDR 800.000.000</th>
                    </tr>
                    <tr>
                        <td>Current</td>
                        <td>28 Account</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Saving</td>
                        <td>5 Account</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Time Deposit</td>
                        <td>2 Account</td>
                        <td></td>
                    </tr>
                    <tr style={{color: 'orange'}}>
                        <td >External Bank</td>
                        <td>4 Account</td>
                        <td>IDR 300.000.000</td>
                    </tr>
                    <tr>
                        <th>Assets</th>
                        <th>44 Account</th>
                        <th>IDR 1.100.000.000</th>
                    </tr>
                    </table>
                    <hr style={hrStyle}/>
                    <h3>Liabilities</h3>
                    <Doughnut data={data2} />
                    <span>As of 20 february 2014</span>
                    <table class="table table-striped">
                    <tr>
                        <th>Information</th>
                        <th>Account</th>
                        <th>Count</th>
                    </tr>
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
                    </table>
                </div>
          </div>
        )
    }
}

const styles = {
    divStyle: {
        
    },
    hrStyle: {
        marginBottom: 10,
        marginTop: 10,
        borderStyle: 'solid'
    }
}

export default PieKacang
