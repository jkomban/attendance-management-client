import axios from './app-axios';
import Config from './config'

const userNamePassAuthenticate = async (request) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_DAO_AUTH_SRVC: serviceName } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${serviceName}/signin`
    // const serviceURL = `${backendBase}/${basePath}/oauth/signin`
    console.log(`userNamePassAuthenticate() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL, request)

        return response.data;

    } catch (e) {
        console.error(`ERROR: services.auth.userNamePassAuthenticate() : failed `)
        // console.log(e);
        throw e
    }
}

const logoutUser = async () => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_DAO_AUTH_SRVC: serviceName } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${serviceName}/logout`
    console.log(`logoutUser() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL)

        return response.data;

    } catch (e) {
        console.error(`ERROR: services.auth.logoutUser() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

const signUpUser = async (request) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_DAO_AUTH_SRVC: serviceName } = Config.config
    const serviceURL = `${backendBase}/${basePath}/signup`
    console.log(`signUp() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL, request)
        return response.data;

    } catch (e) {
        console.log(`ERROR: services.auth.signUp() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}



export { userNamePassAuthenticate, logoutUser, signUpUser }