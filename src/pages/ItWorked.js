import React from 'react'
import { connect } from 'react-redux'

const ItWorked = props => {
    console.log(props)
    return (
        <div>
            <h1>It worked!</h1>
            {/* <h2>{user.data.all_run_totals.distance}</h2> */}
        </div>
    )
}

const mapStateToProps = state => {
    return { user: state.user }
};

export default connect(mapStateToProps)(ItWorked)