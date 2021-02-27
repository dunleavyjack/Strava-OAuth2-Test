import axios from 'axios'
import {React, useState, useEffect} from 'react'
import { connect } from 'react-redux'

const ItWorked = (props) => {
    console.log(props)
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