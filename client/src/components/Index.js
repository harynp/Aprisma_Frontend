import React, {Component} from 'react'
import Pie from '../components/Pie'
import BarIncome from '../components/BarIncome'
import BarOutcome from '../components/BarOutcome'
import MostVisited from '../components/MostVisited'
import ForexRate from '../components/Forex'
import Payable from '../components/Payables'
import Receiveable from '../components/Receivable'
import Login from '../components/Login'


class Index extends Component {
    render () {
        const {cardStyle, divStyle} = styles
        return (
            <div className="col-md-12 card container-fluid" style={divStyle}>
                <div className="row">
                <div className="card-block col-sm-6" style={divStyle}>
                    <Login/>
                    <Pie/>
                    <MostVisited/>
                    <ForexRate/>
                </div>
                <div className="card-block col-md-6" style={cardStyle}>
                    <Receiveable/>
                    <Payable/>
                    <BarIncome/>
                    <BarOutcome/>
                </div>
                </div>
            </div>
        )
    }
}

const styles= {
    divStyle: {
      marginTop: 10,
      width: 960
    }
  }
export default Index