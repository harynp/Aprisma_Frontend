import React, {Component} from 'react'

class PayAbles extends Component {
    constructor() {
        super() 
        this.state = {
            payment: [
                {
                    description: 'INV101 - eInvoice',
                    amount: 'IDR 30.000.000',
                    benefit: 'PT. ABC',
                    due: '01-Maret-2014'
                },
                {
                    description: '2014021239089 - Single Transfer',
                    amount: 'USD 800',
                    benefit: 'John Lennon',
                    due: '01-Maret-2014'
                },
                {
                    description: '201401231189 - Bill Payment',
                    amount: 'IDR 2.000.000',
                    benefit: 'Telkomsel',
                    due: '30-Maret-2014'
                },
                {
                    description: 'CHQ2014 - Incoming Cheque',
                    amount: 'IDR 10.000.000',
                    benefit: 'PT. XYZ',
                    due: '05-April-2014'
                },
                {
                    description: '2014022300189 - Tax Payment',
                    amount: 'IDR 8.700.000',
                    benefit: 'DJP',
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
                <h3>Payables</h3>
            </div>
            <div className="card-block">
            <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Beneficiary</th>
                        <th>Due</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.payment.map((data,idx) => {
                            return (
                            <tr>
                                <td>{data.description}</td>
                                <td>{data.amount}</td>
                                <td>{data.benefit}</td>
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
        padding: 15,
        borderWidth: 2
    }
}

export default PayAbles