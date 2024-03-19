import { Response } from 'express';
import { StudentServices } from './student.service';


const createStudent = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		//  will call service function to send this data

		const result = await StudentServices.createStudentDB(data);

		res.status(200).json({
			success: true,
			message: 'Student is created successfully',
			data: result,
		});
	} catch (error) {
		console.log(error);
	}
};

export const studentControllers = {
    createStudent,
}
