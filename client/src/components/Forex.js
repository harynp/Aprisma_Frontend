import React, { Component } from 'react'


class Forex extends Component {
    constructor() {
        super()
        this.state = {
            matauang: [
                {
                    name: 'USD',
                    buy: '11,520.00',
                    sell: '11,490.00'
                },
                {
                    name: 'SGD',
                    buy: '9,213.65',
                    sell: '9,179.65'
                },
                {
                    name: 'EUR',
                    buy: '15,773.89',
                    sell: '15,673.89'
                },
                {
                    name: 'AUD',
                    buy: '10,691.33',
                    sell: '10,611.33'
                },
                {
                    name: 'JPY',
                    buy: '114.67',
                    sell: '111.67'
                }
            ]
        }
    }
    render () {
        return (
            <div className="card">
                <div className="card-header ">
                    <h3>Forex Rate</h3>
                 </div>
                 <div className="card-block">
                   <span>As of 20 February 2014</span>
                   <table className="table table-striped">
                       <thead>
                        <tr>
                          <th>Currency</th> 
                          <th>Buy</th> 
                          <th>Sell</th> 
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.matauang.map((data,idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{data.name}</td>
                                        <td>{data.buy}</td>
                                        <td>{data.sell}</td>
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

export default Forex