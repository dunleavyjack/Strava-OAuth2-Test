import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setAuthTokens } from '../actions'
import { cleanUpAuthToken, testAuthGetter } from '../utils/functions'

class StravaRedirect extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location)) {
                return history.push('/');
            }
            const stravaAuthToken = cleanUpAuthToken(location.search)
            this.props.setAuthTokens(stravaAuthToken)
            const test = testAuthGetter(stravaAuthToken)
            console.log('test below')
            console.log(test.data)
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
    return { authTokenURL: state.authTokenURL };
}

export default connect(mapStateToProps, {
    setAuthTokens
})(StravaRedirect);