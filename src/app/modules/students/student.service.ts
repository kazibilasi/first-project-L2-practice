import { student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentDB =async(student: student)=>{
 const result = await StudentModel.create(student
    )
 return result;
}

const getAllStudentFromDB= async ()=>{
    const result = await StudentModel.find()
    return result;

}
const getSingleStudentFromDB= async (id : string)=>{
    const result = await StudentModel.findOne({id})
    return result;

}
export const StudentServices = {
    createStudentDB,
    getAllStudentFromDB,
    getSingleStudentFromDB
}