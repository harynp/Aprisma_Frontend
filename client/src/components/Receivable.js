import React, { Component } from 'react'

class Receiveable extends Component {
    constructor() {
        super()
        this.state = {
            receivement: [
                {
                    description: 'INV101 - PT.ABC',
                    amount: 'IDR 50.000.000',
                    due: '21-January-2014'
                },
                {
                    description: 'INV059 - Corporate ltd',
                    amount: 'USD 1.000',
                    due: '01-Maret-2014'
                },
                {
                    description: 'INV099 - PT.Company Indonesia',
                    amount: 'IDR 89.000.000',
                    due: '30-Maret-2014'
                },
                {
                    description: 'CHQ2014 - Incoming Cheque',
                    amount: 'IDR 10.000.000',
                    due: '05-April-2014'
                },
                {
                    description: '2014022300189 - Autodebit',
                    amount: 'IDR 8.700.000',
                    due: '05-April-2014'
                }
            ]
        }
    }
    render() {
        const {divStyle} = styles
        return (
            <div className="card" style={divStyle}>
            <div className="card-header ">
                <h3>Receiveable</h3>
            </div>
            <div className="card-block">
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
                {this.state.receivement.map((data,idx) => {
                    return (
                        <tr key={idx}>
                            <td>{data.description}</td>
                            <td>{data.amount}</td>
                            <td>{data.due}</td> 
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </div>
            </div>
        )
    }
}
const styles = {
    divStyle: {
        marginTop: 10,
        marginBottom: 10,
        padding: 15
    }
}

export default Receiveable