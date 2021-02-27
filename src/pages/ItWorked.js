import React from 'react'
import { connect } from 'react-redux'

const ItWorked = () => {
    return (
        <div>
            <h1>It worked!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.authTokenURL)
    return {authTokenURL: state.authTokenURL};
}

export default connect(mapStateToProps)(ItWorked)