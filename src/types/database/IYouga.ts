import { Types } from 'mongoose';

export interface IYouga {
    _id: Types.ObjectId;
    name: string;
    color: string;
    waste : number;
    status : any; //TODO Made a Enum for the status, refer to the Specifications to know the list
}