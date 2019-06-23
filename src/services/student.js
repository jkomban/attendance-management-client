import axios from 'axios';
import Config from './config'

const getAllStudentDetails = async ({ pageSize = 10, index = 0 }) => {

    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_STUDENT_SRVC: studentSrv } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${studentSrv}`
    console.log(`getAllStudentDetails() - ${serviceURL}`)
    console.log(Config.config)
    let response = {}
    try {
        response = await axios.get(serviceURL)
        return response.data;
        // console.log(tempData.students)
        // return tempData.students
    } catch (e) {
        console.error(`ERROR: services.student.getAllStudentDetails() : failed ${JSON.stringify(e)}`)
        // throw new Error('ERROR in fetching details from students')
    }
}

const deleteStudentDetails = async (Student) => {
    console.log(Student)
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_STUDENT_SRVC: studentSrv } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${studentSrv}/${Student.studentId}`
    const getURL = `${backendBase}/${basePath}/${studentSrv}`

    console.log(`services.student.deleteStudentDetails() - sending request[${serviceURL}]`)
    let response = {}
    console.log(Student)

    try {
        response = await axios.delete(serviceURL, { data: Student })
        console.log(response)
        response = await axios.get(getURL)
        return response.data
    } catch (e) {
        console.log(`ERROR: services.student.deleteStudentDetails() : failed ${JSON.stringify(e)}`)
        console.log(e.response.data)
        console.log(e.response.status)
        return new Error('Could not process the request')
        // throw new Error(`ERROR in deleting student [${Student.studentId}]`)
    }
}

const updateStudentDetails = async (Student) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_STUDENT_SRVC: studentSrv } = Config.config
    let serviceURL;
    let option = "ADD";

    if (Student.studentId) {
        serviceURL = `${backendBase}/${basePath}/${studentSrv}/${Student.studentId}`
        option = "UPDATE"
    } else {
        serviceURL = `${backendBase}/${basePath}/${studentSrv}/`
        option = "ADD"
    }

    console.log(`services.student.updateStudentDetails() - sending request${serviceURL}`)
    let response = {}
    console.log(Student)

    try {
        if (option === "ADD")
            response = await axios.post(serviceURL, Student)
        else if (option === "UPDATE")
            response = await axios.put(serviceURL, Student)

        console.log(response)
        return response
    } catch (e) {
        console.log(`ERROR: services.student.getAllStudentDetails() : failed ${JSON.stringify(e)}`)
        // throw new Error(`ERROR in updating student [${Student.studentId}]`)
    }

}


export { getAllStudentDetails, updateStudentDetails, deleteStudentDetails };
