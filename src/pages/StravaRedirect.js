import React from 'react';
import _ from 'lodash';
import { setAuthTokens } from '../actions'

class LoggedIn extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location)) {
                return history.push('/');
            }
            console.log(location)
            console.log(location.search)
            history.push('/itworked');
        } catch (error) {
            history.push('/');
        }
    }
    render() {
        return null;
    }
}

export default LoggedIn;