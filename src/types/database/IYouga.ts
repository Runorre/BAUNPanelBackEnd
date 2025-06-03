import { Types } from 'mongoose';
import { StateType } from '../enum/enumStateType';

export interface IYouga {
    _id: Types.ObjectId;
    name: string;
    color: string;
    waste : number;
    status : StateType;
}