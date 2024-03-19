import { student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentDB =async(student: student)=>{
 const result = await StudentModel.create(student
    )
 return result;
}
export const StudentServices = {
    createStudentDB,
}