import axios from 'axios';
import Config from './config'

// const getStudentDetails = (studentID) => {
//     return {
//         studentId: studentID,
//         name: {
//             firstName: 'Kutti',
//             middleName: 'Raja',
//             lastName: 'V'
//         },
//         dob: new Date('12/12/1983'),
//         email: 'kutti@gmail.com',
//         gender: 'M',
//         address: {
//             addressline1: '3107 SW Deerfield',
//             addressline2: 'Apt2',
//             city: 'Bentonville',
//             zipCode: 72713,
//             state: 'AR'
//         }
//     }
// };

const getAllStudentDetails = async (pageSize, index) => {

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
        console.log(`ERROR: services.student.getAllStudentDetails() : failed ${JSON.stringify(e)}`)
        throw new Error('ERROR in fetching details from students')
    }
}

const deleteStudentDetails = async (Student) => {
    let { REACT_APP_BACKEND: backendBase, REACT_APP_NAME_BASE: basePath, REACT_APP_STUDENT_SRVC: studentSrv } = Config.config
    const serviceURL = `${backendBase}/${basePath}/${studentSrv}/${Student.studentId}`

    console.log(`services.student.deleteStudentDetails() - sending request[${serviceURL}]`)
    let response = {}
    console.log(Student)

    try {
        response = await axios.delete(serviceURL, { data: Student })
        console.log(response)
        return response
    } catch (e) {
        console.log(`ERROR: services.student.deleteStudentDetails() : failed ${JSON.stringify(e)}`)
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
        throw new Error(`ERROR in updating student [${Student.studentId}]`)
    }

}


export default { getAllStudentDetails, updateStudentDetails, deleteStudentDetails };
