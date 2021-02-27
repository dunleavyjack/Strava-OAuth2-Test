import React from 'react'
import { connect } from 'react-redux'

class ItWorked extends React.Component {
    render(){
        return(
            <div>
                <h1>It worked!</h1>
                <h2>{this.props.userData.data.all_run_totals.distance}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { userData: state.userData}
};

export default connect(mapStateToProps)(ItWorked)