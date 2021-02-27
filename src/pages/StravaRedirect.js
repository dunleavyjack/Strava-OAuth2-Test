import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setAccessToken, setAuthTokens, setRefreshToken, setUserID, setUserData } from '../actions'
import { cleanUpAuthToken, testAuthGetter, getUserData } from '../utils/functions'

class StravaRedirect extends React.Component {
    componentDidMount() {
        const getThoseDamnTokens = async () => {
            const { history, location} = this.props
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
                const accessToken = tokens.access_token
                const refreshToken = tokens.refresh_token
                const userID = tokens.athlete.id
                console.log('ids below')
                console.log(userID)
                console.log(accessToken)


                this.props.setAccessToken(accessToken)
                this.props.setRefreshToken(refreshToken)
                this.props.setUserID(userID)

                // Axios request to get users info
                const userData = await getUserData(userID, accessToken)
                this.props.setUserData(userData)
                console.log(this.props)
                // Once complete, go to display page
                history.push('/itworked');
            } catch (error) {
                history.push('/');
            }
        }
        getThoseDamnTokens()
    }

    render() {
        return (
            <div>
                Loading
            </div>
        )
    };
};

const mapStateToProps = state => {
    return { authTokenURL: state.authTokenURL };
}

export default connect(mapStateToProps, {
    setAccessToken, 
    setAuthTokens, 
    setRefreshToken, 
    setUserID, 
    setUserData
})(StravaRedirect);