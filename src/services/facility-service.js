import axios from './app-axios';
import Config from './config'

const getAllFacilityDetails = async (schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_FACILITY_SRVC: serviceName } = Config.config
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

export { getAllFacilityDetails }