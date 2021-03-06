import axios from './app-axios';
import Config from './config'

const getSchoolDetails = async () => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_SCHOOL_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    let response = {}
    try {
        response = await axios.get(serviceURL)
        return response.data;
        // console.log(tempData.students)
        // return tempData.students
    } catch (e) {
        console.log(`ERROR: services.school.getSchoolDetails() : failed`)
        throw e;
    }
}

const updateSchoolDetails = async (content) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_SCHOOL_SRVC: serviceName } = Config.getConfig()
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

export { getSchoolDetails, updateSchoolDetails }