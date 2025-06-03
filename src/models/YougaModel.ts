import { Schema, model } from 'mongoose'
import { IYouga } from '../types/database/IYouga'
import { StateType } from '../types/enum/enumStateType'

const YougaSchema = new Schema<IYouga>({
    name: {
        type : String,
        required : true
    },
    color : {
        type : String,
        required : true
    },
    waste : {
        type : Number,
        default : 0.0
    },
    status : {
        type : String,
        enum : StateType,
        default : StateType.DEFAULT
    }
})

const YougaModel = model<IYouga>('Youga', YougaSchema);

export default YougaModel;