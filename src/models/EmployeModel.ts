import { Schema, model } from 'mongoose'
import { IEmploye } from '../types/database/IEmploye'

const EmployeSchema = new Schema<IEmploye>({
    name : {
        type : String,
        required : true
    }
})

const EmployeModel = model<IEmploye>('Employee', EmployeSchema)

export default EmployeModel