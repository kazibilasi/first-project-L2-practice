import { Schema, model } from 'mongoose';
import {
	LocalGuardian,
	UserName,
	guardian,
	student,
	
} from './student.interface';

const userNameSchema = new Schema<UserName>({
	firstName: { type: String, required: true },
	middleName: { type: String },
	lastName: { type: String, required: true },
});

const guardianSchema = new Schema<guardian>({
	fatherName: {
		type: String,
		required: true,
	},
	fatherOccupation: {
		type: String,
		required: true,
	},
	fatherContactNo: {
		type: String,
		required: true,
	},
	motherName: {
		type: String,
		required: true,
	},
	motherOccupation: {
		type: String,
		required: true,
	},
	motherContactNo: {
		type: String,
		required: true,
	},
});

const localGuardianSchema = new Schema<LocalGuardian>({
	name: {
		type: String,
		required: true,
	},
	occupation: {
		type: String,
	},
	contactNo: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
});

const studentSchema = new Schema<student>({
	id: { type: String },
	name: userNameSchema,
	gender: ['male', 'female'],
	dateOfBirth: String,
	email: { type: String, required: true },
	contactNo: { type: String, required: true },
	emergencyContactNo: { type: String, required: true },
	bloodGroup: ['A+', 'A-', 'B+', 'B-', 'o+', 'o-', 'AB+', 'AB-'],
	presentAddress: { type: String, required: true },
	permanentAddress: { type: String, required: true },
	guardian: guardianSchema,

	localGuardian: localGuardianSchema,
	profileImg: {
		type: String,
	},
	isActive: ['active', 'blocked'],
});

export const StudentModel = model<student>('Student', studentSchema)
