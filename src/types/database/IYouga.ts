import { Document } from 'mongoose';

export interface IYouga extends Document {
    name: string;
    color: string;
    waste : number;
    status : string;
}