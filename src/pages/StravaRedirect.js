import { React, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setAccessToken, setAuthTokens, setRefreshToken, setUserID } from '../actions'
import { cleanUpAuthToken, testAuthGetter } from '../utils/functions'

const StravaRedirect = ({ history, location, setAuthTokens }) => {
    useEffect(() => {
        const getThoseDamnTokens = async () => {
            try {
                // If not redirected to Strava, return to home
                if (_.isEmpty(location)) {
                    return history.push('/');
                }

                // Save the Auth Token to the Store
                const stravaAuthToken = cleanUpAuthToken(location.search)
                setAuthTokens(stravaAuthToken)

                // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
                const tokens = await testAuthGetter(stravaAuthToken)

                // Add new tokens to the store to be used later
                setAccessToken(tokens.refresh_token)
                setRefreshToken(tokens.refresh_token)
                setUserID(tokens.athlete.id)

                // Axios request to get users info
                

                // Once complete, go to display page
                history.push('/itworked');
            } catch (error) {
                history.push('/');
            }
        }
        getThoseDamnTokens()
    }, [])
    return(
        <div>
            Loading
        </div>
    );
};

const mapStateToProps = state => {
    return { authTokenURL: state.authTokenURL };
}

export default connect(mapStateToProps, {
    setAuthTokens
})(StravaRedirect);