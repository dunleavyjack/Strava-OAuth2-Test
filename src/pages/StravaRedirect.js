import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setAuthTokens } from '../actions'
import {cleanUpAuthToken} from '../utils/functions'

class LoggedIn extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location)) {
                return history.push('/');
            }
            console.log(location.search)
            const stravaAuthToken = cleanUpAuthToken(location.search)
            this.props.setAuthTokens(stravaAuthToken)
            history.push('/itworked');
        } catch (error) {
            history.push('/');
        }
    }
    render() {
        return null;
    }
}

const mapStateToProps = state => {
    console.log(state.authTokenURL)
    return { authTokenURL: state.authTokenURL };
}

export default connect(mapStateToProps, {
    setAuthTokens
})(LoggedIn);