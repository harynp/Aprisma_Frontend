import React, {Component} from 'react'

class Nav extends Component {
    render () {
        const {homeStyle, liStyle} = styles
        return (
            <div className="container-fluid">
            <ul className="nav nav-tabs">
                <li className="fa fa-home" style={homeStyle}></li>
                <li className="nav-item" style={liStyle}>
                    <a className="nav-link">My Tasks</a>
                </li>
                <li className="nav-item dropdown" style={liStyle}>
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
                </li>
                <li className="nav-item dropdown" style={liStyle}>
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Transactions</a>
                </li>
                <li className="nav-item dropdown" style={liStyle}>
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Transfer</a>
                </li>
                <li className="nav-item dropdown" style={liStyle}>
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Payments</a>
                </li>
                <li className="nav-item dropdown" style={liStyle}>
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Liquidity</a>
                </li>
            </ul>
            </div>
        )
    }
}

const styles = {
    homeStyle: {
        fontSize: 40,
        padding: 10
    },
    liStyle: {
        padding: 10
    }
}

export default Nav