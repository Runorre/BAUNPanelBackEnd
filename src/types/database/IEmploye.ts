import { Document } from 'mongoose';

export interface IEmploye extends Document {
    name: string;
}