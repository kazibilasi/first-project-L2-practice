import { Schema, model, connect } from 'mongoose';

export type guardian = {
    
        fatherName:string,
        fatherOccupation: string,
        fatherContactNo: string,
        motherName:string,
        motherOccupation: string;
        motherContactNo:string;

    
}

export type UserName= {
    firstName : string;
    middleName : string;
    lastName: string
};

export type LocalGuardian ={
    name: string;
    occupation: string;
    contactNo: string;
    address:string;

}

export type student ={
    id: string;
    name:UserName;
    gender: "male"| "female";
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string,
    bloodGroup: "A+"| "A-" | "B+"| "B-"| "o+"| "o-"| "AB+"|"AB-";
    presentAddress: string;
    permanentAddress : string;
    guardian:guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
    isActive: 'active'| 'blocked';

  }