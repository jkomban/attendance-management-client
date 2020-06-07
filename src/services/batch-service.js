import axios from './app-axios';
import Config from './config'

const getAllBatches = async (schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_BATCH_SRVC: serviceName } = Config.config
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

export { getAllBatches }