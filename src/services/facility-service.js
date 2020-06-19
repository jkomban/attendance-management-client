import axios from './app-axios';
import Config from './config'

const getAllFacilityDetails = async (schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_FACILITY_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}/all/${schoolID}`
    console.log(`getAllFacilityDetails() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.get(serviceURL)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.school.getAllFacilityDetails() : failed ${JSON.stringify(e)}`)
        console.log(e);
        // throw new Error('ERROR in fetching details from students')
    }
}

const addFacility = async (facilityDetails) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_FACILITY_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`addFacility() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL, facilityDetails)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.batch.addFacility() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

const updateFacility = async (facilityDetails) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_FACILITY_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`updateFacility() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.put(serviceURL, facilityDetails)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.batch.updateFacility() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

export { getAllFacilityDetails, addFacility, updateFacility }