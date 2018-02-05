import React, { Component } from 'react'

class Login extends Component {
    render() {
        const {divStyle} = styles
        return (
            <div className="col-md-12 card container-fluid" style={divStyle}>
            <div className="card-block row">
                <div className="col-md-5">
                    
                </div>
                <div className="col-md-7">
                    
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
    }
}

export default Login