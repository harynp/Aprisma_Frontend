import React, { Component } from 'react'
import Img from 'react-image'

class Login extends Component {
    render() {
        const {divStyle, imgStyle, textStyle, spanStyle, hariStyle} = styles
        return (
            <div className="col-md-12 card container-fluid" style={divStyle}>
            <div className="card-block row">
                <div className="col-md-5">
                <Img style={imgStyle} src="https://instagram.fcgk10-1.fna.fbcdn.net/vp/c6e7328d35f2ad5fa631abfb27a0ed5b/5B08363D/t51.2885-15/e35/17077408_301905403557924_3339817919998590976_n.jpg"/>
                </div>
                <div className="col-md-7">
                    <p style={textStyle}>PT. Aprisma Indonesia</p>
                    <p style={textStyle}>Welcome, <span style={spanStyle}>Hary Nugraha Putra</span></p>
                    <p style={hariStyle}>Tuesday, 06 Feb 2018 </p>
                    <p style={textStyle}><i className="fa fa-envelope"></i> 1 New Message</p>
                    <p style={textStyle}><i className="fa fa-hourglass-end"></i> 3 Pending Task</p>
                    
                </div>
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
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: '100%',
        borderStyle: 'solid',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'left'
    },
    spanStyle: {
        fontWeight: 'bold'
    },
    hariStyle: {
        fontSize: 13,
        textAlign: 'left'
    }
}

export default Login