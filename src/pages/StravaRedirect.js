import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { setUserData } from '../actions'
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

                // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
                const tokens = await testAuthGetter(stravaAuthToken)

                const accessToken = tokens.access_token
                const userID = tokens.athlete.id

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
    setUserData
})(StravaRedirect);