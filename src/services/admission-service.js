import axios from './app-axios';
import Config from './config'

const getAllApplications = async () => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_ADMISSION_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    let response = {}
    try {
        response = await axios.get(serviceURL)
        return response.data;
    } catch (e) {
        console.log(`ERROR: services.admission.getAllApplications() : failed`)
        throw e;
    }
}

const submitAdmissionApplication = async (content) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_ADMISSION_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`updateSchoolDetails() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.put(serviceURL, content)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.school.updateSchoolDetails() : failed ${JSON.stringify(e)}`)
        throw e;
    }
}

export { getAllApplications, submitAdmissionApplication }