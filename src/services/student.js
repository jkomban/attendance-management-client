import axios from 'axios';
import Config from './config'
import tempData from './temp-student'

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

export default { getAllStudentDetails };
