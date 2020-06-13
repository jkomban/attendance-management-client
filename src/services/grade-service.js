import axios from './app-axios';
import Config from './config'

const getAllGrades = async (schoolID) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_GRADE_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`getAllGrades() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.get(serviceURL)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.grade.getAllGrades() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

const addGrade = async (gradeDetails) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_GRADE_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`addGrade() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.post(serviceURL, gradeDetails)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.grade.addGrade() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

const updateGrade = async (gradeDetails) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_GRADE_SRVC: serviceName } = Config.getConfig()
    const serviceURL = `${backendBase}/${basePath}/${serviceName}`
    console.log(`updateGrade() - ${serviceURL}`)
    let response = {}
    try {
        response = await axios.put(serviceURL, gradeDetails)
        return response.data;
    } catch (e) {
        console.error(`ERROR: services.grade.updateGrade() : failed ${JSON.stringify(e)}`)
        console.log(e);
        throw e;
    }
}

export { getAllGrades, addGrade, updateGrade }