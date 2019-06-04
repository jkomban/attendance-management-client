// config service
import axios from 'axios'
import devConfig from '../config/dev-config.json'

// const hostname = window && window.location && window.location.hostname;
// const port = window && window.location && window.location.port;

let config = {
    "REACT_APP_BACKEND": 'http://localhost:8080',
    "REACT_APP_NAME_BASE": process.env.REACT_APP_NAME_BASE,
    "REACT_APP_STUDENT_SRVC": process.env.REACT_APP_STUDENT_SRVC
}

function isLocalHost(hostname) {
    // return hostname.indexOf("localhost") > -1 
    console.log(`isLocalHost() - returns ${process.env.NODE_ENV}`)
    return (process.env.NODE_ENV === 'development')
}


async function getConfiguration() {
    if (!isLocalHost()) {
        //TODO: this has to be changed to a service hit to config.json at root 
        return await axios.get('config.json')
    } else {
        // localhost
        return Promise.resolve({ data: config });
    }
}

async function setConfiguration() {
    let response = await getConfiguration()
    config = response.data
}

export default { setConfiguration, config }

