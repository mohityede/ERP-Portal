import mongoose from 'mongoose';

const reqString = { type: String, required: true }

const EmployeeSchema = new mongoose.Schema({
    empName: reqString,
    designation: reqString,
    gender: reqString,
    salary: { type: Number, required: true },
    address: reqString,
    email: reqString
})

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;