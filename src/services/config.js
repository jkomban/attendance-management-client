// config service
import axios from 'axios'
import devConfig from '../config/dev-config.json'

// const hostname = window && window.location && window.location.hostname;
// const port = window && window.location && window.location.port;

let config = devConfig

function isLocalHost(hostname) {
    // return hostname.indexOf("localhost") > -1 
    console.log(`isLocalHost() - returns ${process.env.NODE_ENV} : ${(process.env.NODE_ENV === 'development')}`)
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
    console.log(`Config set ${JSON.stringify(config)}`)
    console.log(`DevConfig set ${JSON.stringify(devConfig)}`)
    config = response.data
    console.log(`Config set ${JSON.stringify(config)}`)
}

function getConfig(){
    return config;
}

export default { setConfiguration, config, getConfig }

