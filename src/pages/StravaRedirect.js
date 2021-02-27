import { React, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setAuthTokens } from '../actions'
import { cleanUpAuthToken, testAuthGetter } from '../utils/functions'

const StravaRedirect = ({ history, location, setAuthTokens }) => {
    useEffect(() => {
        const getThoseDamnTokens = async () => {
            try {
                if (_.isEmpty(location)) {
                    return history.push('/');
                }
                const stravaAuthToken = cleanUpAuthToken(location.search)
                setAuthTokens(stravaAuthToken)
                const test = await testAuthGetter(stravaAuthToken)
                console.log('test below')
                console.log(test)
                history.push('/itworked');
            } catch (error) {
                history.push('/');
            }
        }
        getThoseDamnTokens()
    }, [])
    return null;
};

const mapStateToProps = state => {
    return { authTokenURL: state.authTokenURL };
}

export default connect(mapStateToProps, {
    setAuthTokens
})(StravaRedirect);