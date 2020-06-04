import axios from './app-axios';
import Config from './config'

const getAllBatches = async (schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_BATCH_SRVC: serviceName } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`getAllBatches() - ${serviceURL}`)
    let response = {}
    try {
        // response = await axios.get(serviceURL)
        response = [{
            id: 1,
            code: 'AAA',
            fullName: '2020 Batch',
            startDate: '06/12/2020',
            endDate: '06/12/2021'
        }, {
            id: 2,
            code: 'BBB',
            fullName: '2021 Batch',
            startDate: '06/12/2021',
            endDate: '06/12/2022'
        }]
        return response;
    } catch (e) {
        console.error(`ERROR: services.batch.getAllBatches() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

export { getAllBatches }