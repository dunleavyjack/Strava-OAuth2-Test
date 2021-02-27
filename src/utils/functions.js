import axios from 'axios'

export const getParamValues = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const cleanUpAuthToken = str => {
    return str
        .split('&')[1]
        .slice(5)
};

export const testAuthGetter = async (authTok) => {
    try {
        const response = await axios.post(`https://www.strava.com/api/v3/oauth/token?client_id=46874&client_secret=6530f2835856e3af4516d8e7bbfb81cef34f4dbf&code=${authTok}&grant_type=authorization_code`)
        console.log('responseeeee below')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}