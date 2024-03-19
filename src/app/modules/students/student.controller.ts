import { Response } from 'express';
import { StudentServices } from './student.service';


const createStudent = async (req: Request, res: Response) => {
	try {
		const student = req.body.student;
		//  will call service function to send this data

		const result = await StudentServices.createStudentDB(student);

		res.status(200).json({
			success: true,
			message: 'Student is created successfully',
			data: result,
		});
	} catch (error) {
		console.log(error);
	}
};


const getAllStudents = async (req: Request, res: Response)=>{

	try{
      const result = await StudentServices.getAllStudentFromDB()

	  res.status(200).json({
		success:true,
		message: 'Students are retrieved successfully',
		data: result,
	  })
	}catch(error){
		console.log(error)
	}

}
const getSingleStudent = async (req: Request, res: Response)=>{

	try{
		const student = req.params.studentId;
      const result = await StudentServices.getSingleStudentFromDB(student)

	  res.status(200).json({
		success:true,
		message: 'Students are retrieved successfully',
		data: result,
	  })
	}catch(error){
		console.log(error)
	}

}


// const getSingleStudent = async(req : Request, res: Response)=>{
// 	try{

// 		const {studentId} = req.params;

// 		const result = await StudentServices.getSingleStudentFromDB(studentId)
// 		res.status(200).json({
// 			success:true,
// 			message: 'Students are retrieved successfully',
// 			data : result
// 		})
// 	}catch(err){
// 		console.log(err)
// 	}
// }

export const studentControllers = {
    createStudent,
	getAllStudents,
	getSingleStudent
}
