import { deleteStudentDetails, updateStudentDetails, getAllStudentDetails } from './student'
import { getSchoolDetails, updateSchoolDetails } from './school-sevice'
import { getAllFacilityDetails, addFacility } from './facility-service'
import { getAllBatches, addBatch, updateBatch } from './batch-service';
import { getAllGrades, addGrade, updateGrade } from './grade-service';
import ConfigS from './config'

export {
    deleteStudentDetails,
    updateStudentDetails,
    getAllStudentDetails,
    getSchoolDetails,
    updateSchoolDetails,
    getAllFacilityDetails,
    getAllBatches, addFacility,
    addBatch,
    updateBatch,
    getAllGrades, addGrade, updateGrade,
    ConfigS
}