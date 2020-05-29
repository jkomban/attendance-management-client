import axios from './app-axios';
import Config from './config'
console.log(axios)

const userNamePassAuthenticate = async (request) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_DAO_AUTH_SRVC: serviceName } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    // const serviceURL = `${backendBase}/${basePath}/oauth/signin`
    console.log(`userNamePassAuthenticate() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL, request)

        return response.data;

    } catch (e) {
        console.error(`ERROR: services.auth.userNamePassAuthenticate() : failed ${JSON.stringify(e)}`)
        console.log(e);
        // throw new Error('ERROR in fetching details from students')
    }
}

const logoutUser = async () => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_DAO_AUTH_SRVC: serviceName } = Config.config
    // const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    const serviceURL = `${backendBase}/${basePath}/auth/logout`
    console.log(`logoutUser() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL)

        return response.data;

    } catch (e) {
        console.error(`ERROR: services.auth.logoutUser() : failed ${JSON.stringify(e)}`)
        console.log(e);
        // throw new Error('ERROR in fetching details from students')
    }
}



export { userNamePassAuthenticate, logoutUser }