import React, { Component } from 'react'

class MostVisited extends Component {
    render() {
        const {divStyle, iconStyle} = styles
        return (
            <div className="card" style={divStyle}>
                <div className="card-header ">
                    <h3>Most Visited</h3>
                 </div>
                <div className="card-block">
                    <i className="fa fa-user-circle big-icons" style={iconStyle}><p style={{fontSize:15}}>User</p></i>
                    <i className="fa fa-address-book big-icons" style={iconStyle}><p style={{fontSize:15}}>Account Summary</p></i>
                    <i className="fa fa-cogs big-icons" style={iconStyle}><p style={{fontSize:15}}>Statement</p></i>
                    <i className="fa fa-credit-card big-icons" style={iconStyle}><p style={{fontSize:15}}>In House Transfer</p></i>
               </div>
            </div>
        )
    }
}

const styles = { 
    iconStyle: {
        fontSize: 60,
        padding: 12,
        background: 'white',
    },
    divStyle: {
        marginTop: 10,
        marginBottom: 10
    }
}

export default MostVisited