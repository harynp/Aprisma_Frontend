import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import Liabilities from '../components/Liabilities';

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

class PieKacang extends Component {
    render() {
        const {hrStyle} = styles
        return (
            <div className="card">
                <div className="card-header ">
                    <h3>Account Overview</h3>
                </div>
                <div className="card-block">
                    <h4>Assets</h4>
                    <Doughnut data={data} />   
                    <span>As of 20 february 2014</span>
                    <table className="table table-striped">
                    <thead>
                    <tr style={{color: 'blue'}}>
                        <th>My Bank</th>
                        <th>40 Account</th>
                        <th>IDR 800.000.000</th>
                    </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                    </table>
                    <hr style={hrStyle}/>
                    <Liabilities/>
                </div>
          </div>
        )
    }
}

const styles = {
    hrStyle: {
        marginBottom: 10,
        marginTop: 10,
        borderStyle: 'solid'
    }
}

export default PieKacang
