import { Document } from 'mongoose';
import { StateType } from '../enum/enumStateType';

export interface IYouga extends Document {
    name: string;
    color: string;
    waste : number;
    status : StateType;
}