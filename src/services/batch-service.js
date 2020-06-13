import axios from './app-axios';
import Config from './config'

const getAllBatches = async (schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_BATCH_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}/all/${schoolID}`
    console.log(`getAllBatches() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.get(serviceURL)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.batch.getAllBatches() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

const addBatch = async (batchDetails, schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_BATCH_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}/${schoolID}`
    console.log(`addBatch() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL, batchDetails)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.batch.addBatch() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

const updateBatch = async (batchDetails, schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_BATCH_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}/${schoolID}`
    console.log(`updateBatch() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.put(serviceURL, batchDetails)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.batch.updateBatch() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

export { getAllBatches, addBatch, updateBatch }